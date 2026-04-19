const container = document.getElementById('materias-container');
const btnAgregar = document.getElementById('agregar');
const btnCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');
const promedioValor = document.getElementById('promedio-valor');
const estado = document.getElementById('estado');

btnAgregar.addEventListener('click', () => {
  const nueva = document.createElement('div');
  nueva.classList.add('materia');
  nueva.innerHTML = `
    <input type="text" placeholder="Materia (ej: Español)" class="nombre-materia">
    <input type="number" placeholder="Nota (0-100)" class="nota" min="0" max="100">
  `;
  container.appendChild(nueva);
});

btnCalcular.addEventListener('click', () => {
  const notas = document.querySelectorAll('.nota');
  let suma = 0;
  let cantidad = 0;

  notas.forEach(input => {
    const valor = parseFloat(input.value);
    if (!isNaN(valor)) {
      suma += valor;
      cantidad++;
    }
  });

  if (cantidad === 0) {
    notas.forEach(input => {
      input.style.border = '2px solid #dc2626';
      input.style.background = '#fff5f5';
    });
    setTimeout(() => {
      notas.forEach(input => {
        input.style.border = 'none';
        input.style.background = 'rgba(255,255,255,0.95)';
      });
    }, 2000);
    return;
  }

  const promedio = (suma / cantidad).toFixed(2);
  promedioValor.textContent = promedio;

  estado.className = '';
  if (promedio >= 70) {
    estado.textContent = '✅ ¡Aprobado!';
    estado.classList.add('aprobado');
  } else {
    estado.textContent = '❌ Reprobado';
    estado.classList.add('reprobado');
  }

  resultado.classList.remove('oculto');
});