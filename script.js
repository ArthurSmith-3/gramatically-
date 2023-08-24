// Diccionario de correcciones (puede ser más extenso)
const correcciones = {
    "holla": "hola",
    "mondo": "mundo",
    "escriptura": "escritura",
    "felicidat": "felicidad",
    "compañia": "compañía",
    "exito": "éxito",
    "problema": "problema",
    "desarollo": "desarrollo",
    "ocacion": "ocasión",
    "univerzidad": "universidad",
    "independensia": "independencia",
    "agradecimiento": "agradecimiento",
    "conoser": "conocer",
    "inteligente": "inteligente",
    "gente": "gente",
    "anbiente": "ambiente",
    "reseña": "reseña",
    "direcsion": "dirección",
    "suseso": "éxito",
    "antencion": "atención",
    "amigos": "amigos",
    "dificil": "difícil"
    // Agregar más palabras y sus correcciones aquí
};

const inputText = document.getElementById("inputText");
const corregirBoton = document.getElementById("corregirBoton");
const resultado = document.getElementById("resultado");

corregirBoton.addEventListener("click", () => {
    const textoOriginal = inputText.value.toLowerCase(); // Convertir a minúsculas para hacer coincidencias

    let palabras = textoOriginal.split(" ");
    palabras = palabras.map(palabra => correcciones[palabra] || palabra);

    const textoCorregido = palabras.join(" ");
    resultado.textContent = textoCorregido;
});

