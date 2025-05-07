function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let contador = 0
function sumador() {
    contador++
    document.querySelector(".pantalla1").textContent = contador;
}
document.querySelector(".Click1").addEventListener("click", sumador);

let botonesApretados = document.querySelectorAll(".BotonColor");
botonesApretados.forEach(boton =>{
    console.log(boton)
})
