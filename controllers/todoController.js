import { Todos } from "../models/todos.js";

export class TodoController {
  static async getAllTodos(req, res) {
    const allTodos = await Todos.getAllTodos();
    console.log(allTodos);
    res.status(200).send(allTodos);
  }

  static async createTodo(req, res) {
    const { title, description, completed, tagsId } = req.body;

    try {
      if (!title) {
        return res
          .status(400)
          .send({ message: "Не переданы обязательные поля" });
      }

      await Todos.createTodo(title, description, completed, tagsId);
      return res.status(201).send({ message: "Задача успешно создана" });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

  static async patchTodoById(req, res) {
    const { todoId } = req.params;
    const { title, description, completed, tagsId } = req.body;

    try {
      if (!title || !description || !completed || !tagsId) {
        return res
          .status(400)
          .send({ message: "Не переданы обязательные поля" });
      }

      await Todos.patchTodoById(todoId, title, description, completed, tagsId);
      res.status(200).send({ message: "Todo успешно изменено" });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async deleteTodoById(req, res) {
    const { todoId } = req.params;

    try {
      await Todos.deleteTodoById(todoId);
      res.status(200).end();
    } catch (e) {
      res.status(500).send(e.message);
    }
  }
}
