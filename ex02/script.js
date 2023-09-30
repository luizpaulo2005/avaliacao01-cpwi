const message_box = document.querySelector("#message")

const clock = () => {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    if ((horas === 19) && (minutos === 30)) {
        message_box.textContent = "Vamos para aula"
    } else if ((horas === 20) && (minutos === 50)) {
        message_box.textContent = "Hora do Intervalo"
    } else if ((horas === 22) && (minutos === 50)) {
        message_box.textContent = "Vamos embora, a aula acabou"
    } else {
        message_box.textContent = ""
    }

    const horaFormatada = `${horas}:${minutos ? `0${minutos}` : minutos}:${segundos < 10 ? `0${segundos}` : segundos}`;
    const relogio = document.getElementById("relogio");
    relogio.textContent = horaFormatada;
  };

setInterval(clock, 1000);