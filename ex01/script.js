const input_message = document.querySelector("#input_message");
const button_message = document.querySelector("#button_message");
const div_message = document.querySelector("#message-box");

div_message.style.display = "none";

const showMessage = () => {
  if (input_message.value == "") {
    alert("A caixa de texto está vazia");
    div_message.textContent = "";
  } else {
    div_message.style.display = "flex";
    div_message.textContent = input_message.value;
    input_message.value = "";
  }
};

button_message.addEventListener("click", showMessage);
