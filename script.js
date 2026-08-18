let tamanhoFonteAtual = 100;

function toggleConfiguracoes() {
    const painel = document.getElementById('painel-config');
    if (painel.style.display === 'block') {
        painel.style.display = 'none';
    } else {
        painel.style.display = 'block';
    }
}

function alterarFonte(variacao) {
    tamanhoFonteAtual += variacao;
    if (tamanhoFonteAtual < 80) tamanhoFonteAtual = 80;
    if (tamanhoFonteAtual > 140) tamanhoFonteAtual = 140;
    
    document.body.style.fontSize = tamanhoFonteAtual + '%';
}

function alternarTema() {
    document.body.classList.toggle('dark-mode');
}
