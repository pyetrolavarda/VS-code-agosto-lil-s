// Abrir e fechar o menu de configurações
function toggleMenu() {
    const menu = document.getElementById('menu-config');
    menu.classList.toggle('hidden');
}

// Alternar entre modo claro e escuro (luminosidade)
function mudarTema() {
    document.body.classList.toggle('dark-mode');
}

// Aumentar ou diminuir o tamanho da letra
let tamanhoAtual = 16;

function mudarFonte(mudanca) {
    tamanhoAtual += mudanca * 2; // Aumenta ou diminui de 2 em 2 pixels
    
    // Define limites para a fonte (não ficar muito pequena nem muito gigante)
    if (tamanhoAtual < 12) tamanhoAtual = 12;
    if (tamanhoAtual > 26) tamanhoAtual = 26;
    
    document.documentElement.style.setProperty('--font-base', tamanhoAtual + 'px');
}
