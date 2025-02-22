// creamos el objeto tiempo
function ElTiempo(temperaturaMinima, temperaturaMaxima, clima, velocidadViento) {
  this.temperaturaMinima = temperaturaMinima;
  this.temperaturaMaxima = temperaturaMaxima;
  this.clima = clima;
  this.velocidadViento = velocidadViento;

  // método para calcular la temperatura media del dia
  this.temperaturaMediaDelDia = function() {
    return (this.temperaturaMinima + this.temperaturaMaxima) / 2;
  };
}

// guardamos a mano los datos de cada dia en un array unidimensional
const semanaTemperaturas = [
  new ElTiempo(10, 20, "Soleado", 5),
  new ElTiempo(12, 22, "Parcialmente nublado", 6),
  new ElTiempo(14, 24, "Nublado", 7),
  new ElTiempo(16, 26, "Lluvia", 8),
  new ElTiempo(18, 28, "Soleado", 5),
  new ElTiempo(20, 30, "Soleado", 4),
  new ElTiempo(22, 32, "Nieve", 9)
];

// cálculo de las medias máximas y mínimas
function calcularMediaTemperaturas(semana) {
  let totalMinima = 0;
  let totalMaxima = 0;

  semana.forEach(dia => {
    totalMinima += dia.temperaturaMinima;
    totalMaxima += dia.temperaturaMaxima;
  });

  return {
    mediaMinima: totalMinima / semana.length,
    mediaMaxima: totalMaxima / semana.length
  };
}

// función para sacar el pronóstico diario en el DOM
function mostrarPronosticoSemana(semana) {
  const pronosticoDiv = document.getElementById("pronosticoSemana");
  semana.forEach((dia, index) => {
    const dayDiv = document.createElement("div");
    dayDiv.innerHTML = `
      <h3>Dia ${index + 1}</h3>
      <p>Temperatura mínima: ${dia.temperaturaMinima}°C</p>
      <p>Temperatura máxima: ${dia.temperaturaMaxima}°C</p>
      <p>Clima: ${dia.clima}</p>
      <p>Velocidad del viento: ${dia.velocidadViento} km/h</p>
      <p>Temperatura media: ${dia.temperaturaMediaDelDia()}°C</p>
    `;
    pronosticoDiv.appendChild(dayDiv);
  });
}

// sacamos el pronostico de la semana
mostrarPronosticoSemana(semanaTemperaturas);

// calculamos medias máximas y mínimas y las mostramos
const medias = calcularMediaTemperaturas(semanaTemperaturas);
const temperaturaMediaDiv = document.getElementById("temperaturaMedia");
temperaturaMediaDiv.innerHTML = `
  Temperatura media mínima: ${medias.mediaMinima.toFixed(2)}°C,
  Temperatura media máxima: ${medias.mediaMaxima.toFixed(2)}°C
`;

  