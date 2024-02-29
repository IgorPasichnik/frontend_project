export default () => {
  const amountInput = document.querySelector("#amount");
  const depositBtn = document.querySelector("#depositBtn");
  const messageDiv = document.querySelector(".message");

  const isAmountValid = (amount) => {
    return /^\d+$/.test(amount);
  };

  const handleClick = (event) => {
    event.preventDefault();

    const amount = amountInput.value;

    if (isAmountValid(amount) && parseInt(amount) > 0) {
      messageDiv.textContent = "Deposit successful";
    } else {
      messageDiv.textContent = "Введите допустимое положительное целое число.";
    }
  };

  depositBtn.addEventListener("click", handleClick);
};
