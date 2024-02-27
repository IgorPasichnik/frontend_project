import { describe } from "yargs";
import { isUserValid } from "../src/index";

test("Проверка корректной работы функции валидации пароля", () => {
  expect(isUserValid("12345")).toEqual([true, ""]);
});

describe("Проверка неверных вариантов работы валидации", () => {
  test("Проверка сообщения об ошибке по длине", () => {
    expect(isUserValid("123")).toEqual([false, "Имя неверное"]);
  });

  test("Проверка на тип аргумента", () => {
    function checkError() {
      isUserValid(123);
    }
    expect(checkError).toThrow();
  });
});
