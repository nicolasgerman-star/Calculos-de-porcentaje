
function calcularNotas(evaluacionIntermedia) {
    const EI_F = 0.4 * evaluacionIntermedia;


    const NF_2 = (60 - EI_F) / 0.6;
    const NF_3 = (70 - EI_F) / 0.6;
    const NF_4 = (81 - EI_F) / 0.6;
    const NF_5 = (91 - EI_F) / 0.6;


    return {
        nf2: NF_2 > 0 ? NF_2.toFixed(2) : "-",
        nf3: NF_3 > 0 ? NF_3.toFixed(2) : "-",
        nf4: NF_4 > 0 && NF_4 <= 100 ? NF_4.toFixed(2) : "-",
        nf5: NF_5 > 0 && NF_5 <= 100 ? NF_5.toFixed(2) : "-"
    };
}


document.getElementById("percentageForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const evaluacionIntermedia = parseFloat(document.getElementById("proceso").value);

    if (isNaN(evaluacionIntermedia) || evaluacionIntermedia < 50) {
        alert("Por favor, ingresa un valor válido mayor o igual a 50.");
        return;
    }
    const resultados = calcularNotas(evaluacionIntermedia);

    document.getElementById("nf2").textContent = resultados.nf2 !== "-" ? `${resultados.nf2}%` : "-";
    document.getElementById("nf3").textContent = resultados.nf3 !== "-" ? `${resultados.nf3}%` : "-";
    document.getElementById("nf4").textContent = resultados.nf4 !== "-" ? `${resultados.nf4}%` : "-";
    document.getElementById("nf5").textContent = resultados.nf5 !== "-" ? `${resultados.nf5}%` : "-";
    
});

