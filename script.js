// Função para exibir informações quando o usuário clicar em um dos 3 botões
function mostrarInfo(opcao) {
    const caixaMensagem = document.getElementById('mensagem-interativa');
    caixaMensagem.style.display = 'block'; // Mostra a caixa na tela

    if (opcao === 'lei') {
        caixaMensagem.innerHTML = "<strong>Lei Maria da Penha (Lei nº 11.340/2006):</strong> É a principal lei no Brasil para prevenir e combater a violência doméstica contra a mulher.";
    } else if (opcao === 'denuncia') {
        caixaMensagem.innerHTML = "<strong>Como Denunciar:</strong> Ligue para o <strong>180</strong> (Central de Atendimento à Mulher). A ligação é gratuita, anônima e funciona 24 horas.";
    } else if (opcao === 'apoio') {
        caixaMensagem.innerHTML = "<strong>Rede de Apoio:</strong> Procure a DEAM (Delegacia Especializada de Atendimento à Mulher) ou o CRAS/CREAS da sua região para obter ajuda psicológica e jurídica.";
    }
}
