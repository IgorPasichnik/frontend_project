import { pool } from "../database/index.js";

export class Todos {
  static async getAllTodos() {
    const allTodosDBResponse = await pool.query("select * from todos", []);
    return allTodosDBResponse.rows;
  }

  static async createTodo(title, description, completed, tagsId) {
    try {
      pool.query(
        "insert into todos(title, description, completed, tags_id) values($1, $2, $3, $4)",
        [title, description, completed, tagsId]
      );
      return true;
    } catch (e) {
      throw new Error("Todo не создано");
    }
  }

  static async patchTodoById(id, title, description, completed, tagsId) {
    try {
      const updateResponse = await pool.query(
        "update todos set title = $1, description = $2, completed = $3, tags_id = $4 where id = $5",
        [title, description, completed, tagsId, id]
      );
      if (updateResponse.rowCount === 0) {
        throw new Error("Todo не найден");
      }
      return true;
    } catch (error) {
      throw new Error("Не удалось обновить задачу");
    }
  }
  static async deleteTodoById(id) {
    try {
      const finedTodosBResponse = await pool.query(
        "select * from todos where id = $1",
        [id]
      );
      if (finedTodosBResponse.rowCount === 0) {
        throw new Error();
      }
      await pool.query("delete from todos where id = $1", [id]);
      return;
    } catch (e) {
      throw new Error("Ошибка удаления");
    }
  }
}
