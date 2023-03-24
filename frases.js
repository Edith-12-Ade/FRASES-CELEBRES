const columnaA =[

"La victoria más difícil es la victoria sobre uno mismo (Aristóteles)",
"Es sencillo hacer que las cosas sean complicadas, pero es difícil hacer que sean sencillas (Friedrich Nietzsche)",
"La peor lucha es la que no se hace (Karl Marx)",
"La felicidad no brota de la razón, sino de la imaginación (Immanuel Kant)",
"La experiencia no es lo que te ocurre, es lo que haces con lo que te ocurre (Aldous Huxley)",
"Construimos demasiados muros y no suficientes puentes (Isaac Newton)",
"Estar preparado es importante, saber esperar lo es aún más, pero aprovechar el momento adecuado es la clave de la vida (Arthur Schnitzler)",
"No hay noche, por larga que sea, que no encuentre el día (W. Shakespeare)",
"La mejor manera de librarse de la tentación es caer en ella (Oscar Wilde)",
"La vida es una película que vuelve a empezar cada mañana al despertarnos. Olvídate de tus errores, cada día tienes una nueva oportunidad para triunfar y alcanzar la felicidad (Norkin Gilbert)",
];

function frases() {

    const posicionA = Math.floor(Math.random()*columnaA.length);

    const celebres = `${columnaA[posicionA]}`

    return celebres;
}

console.log(frases());

function seleccionaFrase() {
    document.getElementById("celebres").innerHTML = frases();
}

seleccionaFrase();