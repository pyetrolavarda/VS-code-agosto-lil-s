let tamanhoFonteAtual = 100;

// Exibir ou ocultar o painel de configurações
function toggleConfiguracoes() {
    const painel = document.getElementById('painel-config');
    if (painel.style.display === 'block') {
        painel.style.display = 'none';
    } else {
        painel.style.display = 'block';
    }
}

// Aumentar ou diminuir o tamanho da fonte
function alterarFonte(variacao) {
    tamanhoFonteAtual += variacao;
    if (tamanhoFonteAtual < 80) tamanhoFonteAtual = 80;
    if (tamanhoFonteAtual > 140) tamanhoFonteAtual = 140;
    
    document.body.style.fontSize = tamanhoFonteAtual + '%';
}

// Alternar entre modo claro e modo escuro
function alternarTema() {
    document.body.classList.toggle('dark-mode');
}

// Função de exibição das informações dos 3 botões principais
function mostrarInfo(opcao) {
    const caixaMensagem = document.getElementById('mensagem-interativa');
    caixaMensagem.style.display = 'block';

    if (opcao === 'lei') {
        caixaMensagem.innerHTML = "<strong>Lei Maria da Penha (Lei nº 11.340/2006):</strong> É a principal legislação no Brasil para prevenir e combater a violência doméstica e familiar contra a mulher.";
    } else if (opcao === 'denuncia') {
        caixaMensagem.innerHTML = "<strong>Como Denunciar:</strong> Ligue para o <strong>180</strong> (Central de Atendimento à Mulher). A ligação é gratuita, anônima e funciona 24h em todo o país.";
    } else if (opcao === 'apoio') {
        caixaMensagem.innerHTML = "<strong>Rede de Apoio:</strong> Procure a DEAM (Delegacia Especializada de Atendimento à Mulher), CRAS/CREAS ou centros de acolhimento locais.";
    }
}
