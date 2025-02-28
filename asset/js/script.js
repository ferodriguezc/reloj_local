let centesimas = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

function actualizarCronometro() {
    centesimas++;

    if (centesimas === 100) {
        centesimas = 0;
        segundos++;
    }

    else if (segundos === 60) {
        segundos = 0;
        minutos++;
    } else if (minutos === 60) {
        horas++
        minutos = 0;
    }
   
    

    const horasFormateadas = String(horas).padStart(2, '0');
    const minutosFormateados = String(minutos).padStart(2, '0');
    const segundosFormateados = String(segundos).padStart(2, '0');
    const centesimasFormateados = String(centesimas).padStart(2, '0');

    document.getElementById('cronometro').textContent = `${horasFormateadas}:${minutosFormateados}:${segundosFormateados}:${centesimasFormateados}`;
}


function pley() {
    if (!intervalo) { // Solo inicia si no hay un intervalo activo
        intervalo = setInterval(actualizarCronometro, 10);
    }
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null; // Reinicia la variable para permitir reiniciar después
}

function reiniciar() {
    pausar(); // Detiene cualquier intervalo activo
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.getElementById('cronometro').textContent = '00:00:00:00'; // Reinicia la visualización
}