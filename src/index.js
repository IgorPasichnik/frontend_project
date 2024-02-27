export const isUserValid = (user) => {
  if (typeof user !== "string") {
    throw new Error("Некорректное значение для пароля");
  }
  if (user.length > 4 && user[0] === user[0].toUpperCase()) {
    return [true, ""];
  } else {
    return [false, "Имя неверное"];
  }
};
