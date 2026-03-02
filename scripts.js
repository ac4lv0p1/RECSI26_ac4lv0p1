document.addEventListener("DOMContentLoaded", function() {
    const hora = document.createElement("p");
    hora.textContent = `Hora: ${new Date().toLocaleTimeString()}`;
    document.body.prepend(hora);
});