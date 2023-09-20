

// Agrega un evento de clic al botón 1
document.querySelector("#boton1").addEventListener("click", () => {
    // Llama a la función emitirCorazones repetidamente
    setInterval(emitirCorazones, 200); // Puedes ajustar el intervalo según tus preferencias
});

// Función para emitir corazones
function emitirCorazones() {
    const heart = document.createElement("div");
    heart.className = "heart"; // Mantén la clase "heart"
    document.body.appendChild(heart);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;

    // Ajusta el tamaño y la forma de los corazones aquí
    const tamañoCorazon = Math.random() * 50 + 10; // Puedes ajustar el rango y el tamaño máximo
    heart.style.width = `${tamañoCorazon}px`;
    heart.style.height = `${tamañoCorazon}px`;

    // Añade una animación para dar forma a los corazones
    heart.style.animation = "corazon 0.8s ease infinite";

    setTimeout(() => {
        heart.remove();
    }, 2000);
}

