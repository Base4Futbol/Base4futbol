const milink = document.getElementById("milink");
const complemento1 = document.getElementById("team_name");
const complemento2 = document.getElementById("token");
const urlOriginal = milink.getAttribute("href");
let primerComplemento = "";
let segundoComplemento = "";

complemento1.addEventListener("input", configurarVariables);
complemento2.addEventListener("input", configurarVariables);

function configurarVariables(e) {
const valor = this.value;
const id = this.getAttribute("id");
cambiarTexto(valor, id);
}

function cambiarTexto(texto, complemento) {
if (complemento === 'team_name') {
    primerComplemento = texto;
    const nuevaUrl = `${urlOriginal}/${primerComplemento}/${segundoComplemento}`;
    milink.setAttribute("href", nuevaUrl);
} else {
    segundoComplemento = texto;
    const nuevaUrl = `${urlOriginal}/${primerComplemento}/${segundoComplemento}`;
    milink.setAttribute("href", nuevaUrl);
    }
}
