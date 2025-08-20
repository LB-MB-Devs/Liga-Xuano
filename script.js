// Equipos
const equipos = ["Inter De Milan", "Barcelona", "Liverpool"];
const listaEquipos = document.getElementById("lista-equipos");
equipos.forEach(e => {
    const li = document.createElement("li");
    li.textContent = e;
    listaEquipos.appendChild(li);
});

// Resultados (varias fechas)
const resultados = [
    {fecha: "20/08/2025", partido: "Barcelona vs Liverpool", resultado: "2 - 1"},
    {fecha: "21/08/2025", partido: "Liverpool vs Inter De Milan", resultado: "1 - 1"},
    {fecha: "22/08/2025", partido: "Inter De Milan vs Barcelona", resultado: "3 - 0"},
];

const tablaResultados = document.getElementById("tabla-resultados");
resultados.forEach(r => {
    const fila = document.createElement("tr");
    fila.innerHTML = `<td>${r.fecha}</td><td>${r.partido}</td><td>${r.resultado}</td>`;
    tablaResultados.appendChild(fila);
});

// Títulos
const titulos = [
    {equipo: "Barcelona", cantidad: 6},
    {equipo: "Liverpool", cantidad: 1},
];
const listaTitulos = document.getElementById("lista-titulos");
titulos.forEach(t => {
    const li = document.createElement("li");
    li.textContent = `${t.equipo} - ${t.cantidad} títulos`;
    listaTitulos.appendChild(li);
});

// Transferencias
const transferencias = [
    {jugador: "Andres Onana", desde: "Manchester United", hacia: "Barcelona"},
    {jugador: "Declan Rice", desde: "Arsenal", hacia: "Inter De Milan"},
];
const listaTransferencias = document.getElementById("lista-transferencias");
transferencias.forEach(tr => {
    const li = document.createElement("li");
    li.textContent = `${tr.jugador}: ${tr.desde} → ${tr.hacia}`;
    listaTransferencias.appendChild(li);
});
