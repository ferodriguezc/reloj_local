function mostrarHora() {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    document.getElementById('hora').textContent = `${horas}:${minutos}:${segundos}`;
}



// Actualiza la hora cada segundo
setInterval(mostrarHora, 1000);

// Muestra la hora inmediatamente al cargar la página
mostrarHora();