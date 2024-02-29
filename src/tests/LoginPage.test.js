import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("LoginPage", () => {
  test("Отображает поле ввода пользователя", () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );
    const userInput = screen.getByPlaceholderText(/name/i);
    expect(userInput).toBeInTheDocument();
  });

  test("Отображает поле ввода пароля", () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );
    const passwordInput = screen.getByPlaceholderText(/password/i);
    expect(passwordInput).toBeInTheDocument();
  });

  test("Правильность ввода пользователя", () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );
    const userInput = screen.getByPlaceholderText(/name/i);
    fireEvent.change(userInput, { target: { value: "testUser" } });
    expect(userInput.value).toBe("testUser");
  });

  test("Сообщение об ошибке для неверного ввода пользователя", () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );
    const userInput = screen.getByPlaceholderText(/name/i);
    fireEvent.change(userInput, { target: { value: "" } });
    waitFor(() => {
      const errorMessage = screen.queryByText("Поле не может быть пустым");
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test("Правильность ввода пароля", () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );
    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.change(passwordInput, { target: { value: "testPassword" } });
    expect(passwordInput.value).toBe("testPassword");
  });

  test("Сообщение об ошибке при вводе неверного пароля", () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );
    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.change(passwordInput, {
      target: { value: "invalidPassword123" },
    });
    waitFor(() => {
      const errorMessage = screen.queryByText("Некорректный пароль");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
