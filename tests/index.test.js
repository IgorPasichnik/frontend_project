import "@testing-library/jest-dom";
import testingLibrary from "@testing-library/dom";
import { waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import path from "node:path";
import fs from "node:fs";
import app from "../app.js";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { screen } = testingLibrary;
let elements;

beforeEach(async () => {
  const pathToHTML = path.join(__dirname, "..", "index.html");
  const html = fs.readFileSync(pathToHTML, "utf-8");

  document.body.innerHTML = html.toString();
  await app();

  elements = {
    amountInput: screen.getByRole("textbox", { name: /amount/i }),
    depositBtn: document.getElementById("depositBtn"),
    messageDiv: document.getElementById("message"),
  };
});

test("Отображение сообщения об ошибке при вводе невалидного числа", () => {
  userEvent.type(elements.amountInput, "abc");
  userEvent.click(elements.depositBtn);

  waitFor(() => {
    expect(elements.messageDiv.textContent).toBe(
      "Введите допустимое положительное целое число."
    );
  });
});

test("Отображение сообщения об успешном депозите при вводе корректного числа", () => {
  userEvent.type(elements.amountInput, "100");
  userEvent.click(elements.depositBtn);

  waitFor(() => {
    expect(elements.messageDiv.textContent).toBe("Deposit successful");
  });
});

//await new Promise((resolve) => setTimeout(resolve, 200));

// expect(
//   screen.queryByText("Введите допустимое положительное целое число.")
// ).toBeInTheDocument();

//await new Promise((resolve) => setTimeout(resolve, 100));

// expect(
//   screen.queryByText("Deposit successful")
// ).toBeInTheDocument();
