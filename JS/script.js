var visor;
var resultado;

// Função para adicionar números e operadores ao visor
function adicionarAoVisor(valor) {
    visor = document.getElementById('resultado');
    visor.innerHTML += valor;
}

// Função para limpar o visor
function limparVisor() {
    visor = document.getElementById('resultado');
    visor.innerHTML = "";
}

// Função para remover o último caractere do visor
function removerUltimoCaractere() {
    visor = document.getElementById('resultado');
    visor.innerHTML = visor.innerHTML.slice(0, -1);
}

// Função para calcular e exibir o resultado
function calcularResultado() {
    visor = document.getElementById('resultado');
    resultado = visor.innerHTML;

    if(resultado) {
        visor.innerHTML = eval(resultado);
    } else {
        visor.innerHTML = "Nada...";
    }
}
