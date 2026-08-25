// Função para abrir e fechar o menu ao clicar na engrenagem
function toggleMenu() {
    const menu = document.getElementById('menu-config');
    menu.classList.toggle('hidden');
}

// Função para alternar entre o modo claro e o modo escuro
function mudarTema() {
    document.body.classList.toggle('dark-mode');
}

// Variável que guarda o tamanho inicial da fonte
let tamanhoAtual = 16;

// Função para aumentar ou diminuir a letra do site todo
function mudarFonte(mudanca) {
    tamanhoAtual += mudanca * 2; // Aumenta ou diminui 2 pixels por clique
    
    // Limites de tamanho: mínimo 12px, máximo 26px
    if (tamanhoAtual < 12) {
        tamanhoAtual = 12;
    }
    if (tamanhoAtual > 26) {
        tamanhoAtual = 26;
    }
    
    // Aplica o novo tamanho na variável do CSS (--font-base)
    document.documentElement.style.setProperty('--font-base', tamanhoAtual + 'px');
}
