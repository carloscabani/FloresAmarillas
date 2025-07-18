// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "Déjame tomarte de la mano", time: 18 },
  { text: "Déjame mirarte a los ojos", time: 21 },
  { text: "Déjame a través de mi mirada", time: 26 },
  { text: "Darte todo mi esplendor", time: 29 },

  { text: "Déjame quedarme aquí", time: 34 },
  { text: "Déjame besarte ahí", time: 36.5 },
  { text: "Donde guardas tus secretos", time: 40 },
  { text: "Los más oscuros y los más bellos", time: 43 },

  { text: "Te regalo mis piernas", time: 49},
  { text: "Recuesta tu cabeza en ellas", time: 52 },
  { text: "Te regalo mis fuerzas", time: 57 },
  { text: "Úsalas cada que no tengas", time: 59.5 },

  { text: "Te regalo las piezas", time: 65 },
  { text: "Que a mi alma conforman", time: 68 },
  { text: "Que nunca nada te haga falta a ti", time: 70 },
  { text: "Te voy a amar hasta morir", time: 76 },
  { text: "Te voy a amar hasta morir", time: 79.5 },
  
  { text: "♪", time: 83 },
  
  { text: "Déjame jugar contigo", time: 97 },
  { text: "Déjame hacerte sonreír", time: 100 },
  { text: "Déjame darte de mi dulzura", time: 105 },
  { text: "Pa' que sientas lo que sentí", time: 108 },

  { text: "Déjame cuidarte", time: 113 },
  { text: "Déjame abrazarte", time: 115 },
  { text: "Déjame enseñarte todo lo que tengo", time: 119 },
  { text: "Pa' hacerte muy feliz", time: 123 },

  { text: "Te regalo mis piernas", time: 128 },
  { text: "Recuesta tu cabeza en ellas", time: 131 },
  { text: "Te regalo mis fuerzas", time: 136 },
  { text: "Úsalas cada que no tengas", time: 138.5 },

  { text: "Te regalo las piezas", time: 143 },
  { text: "Que a mi alma conforman", time: 146 },
  { text: "Que nunca nada te haga falta a ti", time: 148.5 },
  { text: "Te voy a amar hasta morir", time: 154 },

  { text: "Te regalo mis piernas", time: 160 },
  { text: "Recuesta tu cabeza en ellas", time: 162 },
  { text: "Te regalo mis fuerzas", time: 167.5 },
  { text: "Úsalas cada que no tengas", time: 170 },

  { text: "Te regalo las piezas", time: 175 },
  { text: "Que a mi alma conforman", time: 178 },
  { text: "Que nunca nada te haga falta a ti", time: 180 },
  { text: "Te voy a amar hasta morir", time: 186 },
  { text: "Te voy a amar hasta morir", time: 191 },
  { text: "Te voy a amar hasta morir", time: 195 },

  { text: "♪", time: 200 },
];



function updateLyrics() {
  var time = Math.floor(audio.currentTime);

  for (var i = 0; i < lyricsData.length - 1; i++) {
    var current = lyricsData[i];
    var next = lyricsData[i + 1];

    if (time >= current.time && time < next.time) {
      lyrics.innerHTML = current.text;
      lyrics.style.opacity = 1;
      return;
    }
  }

  // Si es la última línea o ninguna coincide
  var last = lyricsData[lyricsData.length - 1];
  if (time >= last.time) {
    lyrics.innerHTML = last.text;
    lyrics.style.opacity = 1;
  } else {
    lyrics.innerHTML = "";
    lyrics.style.opacity = 0;
  }
}


setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 300000);