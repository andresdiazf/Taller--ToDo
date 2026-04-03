// mensaje de prueba
// console.log('app.js cargado correctamente en el navegador');

const inputTarea    = document.getElementById('escribirTarea');
const selectCategoria = document.getElementById('categoriaTarea');
const btnAgregar    = document.getElementById('bntAgregarTarea');
const listaTareas   = document.getElementById('listaTareas');
const contTotal     = document.getElementById('tareasTotales');
const contCompletadas = document.getElementById('tareasCompletas');

btnAgregar.addEventListener('click', agregarTarea);

function agregarTarea() {
    const textoTarea = inputTarea.value.trim();
    const categoria = selectCategoria.value;

    if (textoTarea === '') {
        alert(' ⚠️ Escribe una tarea.');
        return;
    }

    if (categoria === '') {
    alert('⚠️ Selecciona una categoría');
    return;
    }

    const li = document.createElement('li');
    li.classList.add('tarea-item');
    
    li.innerHTML = `
        <button class="btn-hecha">✅</button>
        <span class="tarea-texto">${textoTarea}</span>
        <span class="tarea-categoria">${obtenerEmoji(categoria)} ${categoria}</span>
        <button class="btn-eliminar">🗑️</button>
    `;

    li.querySelector('.btn-hecha').addEventListener('click', function() {
    if (confirm('¿Seguro que quieres marcar esta tarea como hecha?')) {
        li.classList.toggle('hecha');
        actualizarContador();
        }
     });

    li.querySelector('.btn-eliminar').addEventListener('click', function() {
        if (confirm('¿Seguro que quieres eliminar esta tarea?')) {
         li.remove();
         actualizarContador();
        }
    });

 listaTareas.appendChil(li);
 inputTarea.value = '';
 selectCategoria.value = '';
 actualizarContador();
} 

function obtenerEmoji(categoria) {
  const emojis = {
    'trabajo'    : '💼',
    'estudio'    : '📚',
    'personal'   : '👤',
    'urgente'    : '⚠️',
    'otrasTareas': '📋'
  };
  return emojis[categoria] || '📌';
};

function actualizarContador() {
  const total      = listaTareas.querySelectorAll('.tarea-item').length;
  const completadas = listaTareas.querySelectorAll('.tarea-item.hecha').length;
  contTotal.textContent       = total;
  contCompletadas.textContent = completadas;
}
