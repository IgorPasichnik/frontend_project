import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { RegistrationPage } from "../pages/RegistrationPage/RegistrationPage";
import { BrowserRouter as Router } from "react-router-dom";

describe("RegistrationPage", () => {
  test("Отображает поле ввода пользователя", () => {
    render(
      <Router>
        <RegistrationPage />
      </Router>
    );
    const userInput = screen.getByPlaceholderText(/name/i);
    expect(userInput).toBeInTheDocument();
  });

  test("Отображает поле ввода пароля", () => {
    render(
      <Router>
        <RegistrationPage />
      </Router>
    );
    const passwordInput = screen.getByTestId("passwordInput");
    expect(passwordInput).toBeInTheDocument();
  });

  test("Отображает поле ввода подтверждения пароля", () => {
    render(
      <Router>
        <RegistrationPage />
      </Router>
    );
    const passwordConfirmationInput = screen.getByTestId("passwordInput2");
    expect(passwordConfirmationInput).toBeInTheDocument();
  });

  test("Отображает поле ввода электронной почты", () => {
    render(
      <Router>
        <RegistrationPage />
      </Router>
    );
    const emailInput = screen.getByPlaceholderText(/email/i);
    expect(emailInput).toBeInTheDocument();
  });

  test("Правильность ввода пользователя", () => {
    render(
      <Router>
        <RegistrationPage />
      </Router>
    );
    const userInput = screen.getByPlaceholderText(/name/i);
    fireEvent.change(userInput, { target: { value: "testUser" } });
    expect(userInput.value).toBe("testUser");
  });

  test("Сообщение об ошибке для неверного ввода пользователя", () => {
    render(
      <Router>
        <RegistrationPage />
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
        <RegistrationPage />
      </Router>
    );
    const passwordInput = screen.getByTestId("passwordInput");
    fireEvent.change(passwordInput, { target: { value: "testPassword" } });
    expect(passwordInput.value).toBe("testPassword");
  });

  test("Сообщение об ошибке при вводе неверного пароля", () => {
    render(
      <Router>
        <RegistrationPage />
      </Router>
    );
    const passwordInput = screen.getByTestId("passwordInput");
    fireEvent.change(passwordInput, { target: { value: "" } });
    waitFor(() => {
      const errorMessage = screen.queryByText("Поле не может быть пустым");
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test("Правильность ввода подтверждения пароля", () => {
    render(
      <Router>
        <RegistrationPage />
      </Router>
    );
    const passwordConfirmationInput = screen.getByTestId("passwordInput2");
    fireEvent.change(passwordConfirmationInput, {
      target: { value: "testPassword" },
    });
    expect(passwordConfirmationInput.value).toBe("testPassword");
  });

  test("Сообщение об ошибке при вводе неверного подтверждения пароля", () => {
    render(
      <Router>
        <RegistrationPage />
      </Router>
    );
    const passwordConfirmationInput = screen.getByTestId("passwordInput2");
    fireEvent.change(passwordConfirmationInput, { target: { value: "" } });
    waitFor(() => {
      const errorMessage = screen.queryByText("Поле не может быть пустым");
      expect(errorMessage).toBeInTheDocument();
    });
  });

  test("Правильность ввода адреса электронной почты", () => {
    render(
      <Router>
        <RegistrationPage />
      </Router>
    );
    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput.value).toBe("test@example.com");
  });

  test("Сообщение об ошибке при вводе неверного адреса электронной почты", () => {
    render(
      <Router>
        <RegistrationPage />
      </Router>
    );
    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: "invalidemail" } });
    waitFor(() => {
      const errorMessage = screen.queryByText("Некорректный email");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
