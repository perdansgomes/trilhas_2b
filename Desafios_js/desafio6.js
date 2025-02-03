let nota = 8

function VerificarNota(nota) {
    if (nota >= 7) {
        console.log("Aprovado.");
    }
    else if (nota >= 5 < 6 ) {
        console.log("Recuperação");
    }
    else {
        console.log("Reprovado");
    }
}

console.log(VerificarNota(nota))