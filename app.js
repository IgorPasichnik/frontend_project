export default () => {
  const amountInput = document.querySelector("#amount");
  const depositBtn = document.querySelector("#depositBtn");
  const messageDiv = document.querySelector(".message");

  const isAmountValid = (amount) => {
    return /^\d+$/.test(amount);
  };

  const handleClick = (event) => {
    event.preventDefault();

    const amount = amountInput.value.trim();

    if (isAmountValid(amount) && parseInt(amount) > 0) {
      messageDiv.textContent = "Deposit successful";

      setTimeout(() => (messageDiv.textContent = ""), 5000);
    } else {
      messageDiv.textContent = "Введите допустимое положительное целое число.";
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    depositBtn.addEventListener("click", handleClick);
  });
};
