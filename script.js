let contador = 0
function sumador() {
    contador++
    document.querySelector(".pantalla1").textContent = contador;
}
document.querySelector(".Click1").addEventListener("click", sumador);