const dayTitle = document.getElementById('day-title');
const dayText = document.getElementById('day-text');
const endText = document.getElementById('letra-pequeña');

function hexToRgba(hex, alpha) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


const daysOfMonth = [
    { title: "1", text:  "No esperaba verte hoy"},
    { title: "2", text:  "Pero ahora que estas aquí"},
    { title: "3", text:  "Mis ojos no pueden dejar de mirarte"},
    { title: "4", text:  "No se como he podido estar sin ti"},
    { title: "5", text:  "Hoy el mundo cabe en mis manos"},
    { title: "6", text:  "No puedo creer lo que hoy siento"},
    { title: "7", text:  "Estoy nadando en un mar de mil colores"},
    { title: "8", text:  "No puedo creer lo que hoy siento"},
    { title: "9", text:  "Ya no hay nubes grises en mi cielo"},
    { title: "10", text: "Y no puedo creer lo que hoy siento"},
    { title: "11", text: "Un corazón ardiendo en llamas"},
    { title: "12", text: "Calentado toda mi alma"},
    { title: "13", text: "Le doy gracias a Dios"},
    { title: "14", text: "Por haberte puesto en mi camino"},
    { title: "15", text: "Veras no soy perfecto,"},
    { title: "16", text: "Puedo fallarte, pero pondré todo mi esfuerzo,"},
    { title: "17", text: "Mi alma y mi empeño en darte"},
    { title: "18", text: "Lo mejor de este mundo"},
    { title: "19", text: "Y no puedo creer"},
    { title: "20", text: "Lo que hoy yo siento"},
    { title: "21", text: "Mi corazón arde en llamas"},
    { title: "22", text: "Y mi alma ya no me pertenece"},
    { title: "23", text: "Tiene un nuevo dueño"},
    { title: "24", text: "Vientos van y vienen"},
    { title: "25", text: "Aun cuando la estrellas se apaguen"},
    { title: "26", text: "Cuando el sol deje de brillar"},
    { title: "27", text: "Yo seguiré aquí, amándote por siempre."},
    { title: "28", text: "Haré que mi corazón brille para que sea tu luz"},
    { title: "29", text: "No te abandonare, te guiare con pasos ciegos,"},
    { title: "30", text: "Solo sigue el sonido de mi alma, veras todo va a estar bien"},
];

 
const colors = [
    "#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9",
    "#BBDEFB", "#B3E5FC", "#B2EBF2", "#B2DFDB", "#C8E6C9",
    "#DCEDC8", "#F0F4C3", "#FFF9C4", "#FFECB3", "#FFE0B2",
    "#FFCCBC", "#D7CCC8", "#F5F5F5", "#CFD8DC", "#FFAB91",
    "#FFCC80", "#FFF176", "#81C784", "#4DB6AC", "#4FC3F7",
    "#7986CB", "#9575CD", "#F06292", "#E57373", "#BA68C8"
];

// Maneja el clic del botón para mostrar el contenido
const contentElement = document.getElementById('canvas');
// const contentElement_2 = document.querySelector("#boton_id");

// Maneja el clic del botón para mostrar el contenido y ocultar el botón
const showContentBtn = document.getElementById('show-btn');
showContentBtn.addEventListener('click', () => {
    contentElement.style.display = 'block';
    showContentBtn.style.display = 'none';
});


const today = new Date().getDate() - 1;
const todayData = daysOfMonth[today];
const todayColor = colors[today];

const d = new Date();
let month = d.getMonth();

// dayTitle.textContent = todayData.title;
// dayText.textContent = todayData.text;
// document.getElementById("canvas").style.backgroundColor = todayColor;

const alpha = 0.75; // Ajusta la transparencia aquí

if(month + 1 ===6){
    dayTitle.textContent = todayData.title;
    dayText.textContent = todayData.text;
    endText.textContent = "Vuelve mañana";
    document.getElementById("canvas").style.backgroundColor = hexToRgba(todayColor,alpha);
}else{
    dayTitle.innerHTML = "Feliz Cumpleaños Adri!!";
    dayText.innerHTML = daysOfMonth.map(objeto => objeto.text).join("<br>");;
    endText.innerHTML = "Gracias por todo <br> Algún día lo mejoraré y tal vez le ponga sonido";
    document.getElementById("canvas").style.backgroundColor = hexToRgba(todayColor,alpha);
}