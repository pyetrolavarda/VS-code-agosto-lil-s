// Função para abrir e fechar o painel de configurações
function toggleConfiguracoes() {
    let painel = document.getElementById('painel-config');
    if (painel.style.display === 'none') {
        painel.style.display = 'block';
    } else {
        painel.style.display = 'none';
    }
}

// Função para aumentar ou diminuir a letra
let tamanhoFonte = 100;
function alterarFonte(numero) {
    tamanhoFonte = tamanhoFonte + numero;
    if (tamanhoFonte < 80) tamanhoFonte = 80;
    if (tamanhoFonte > 150) tamanhoFonte = 150;
    document.body.style.fontSize = tamanhoFonte + '%';
}

// Função para ativar o modo noturno
function alternarTema() {
    document.body.classList.toggle('dark-mode');
}

// Função principal que troca o texto quando clica nos botões
function mostrarConteudo(opcao) {
    let area = document.getElementById('conteudo-dinamico');

    if (opcao === 'lei') {
        area.innerHTML = `
            <h2>O que é a Lei Maria da Penha?</h2>
            <p>Sancionada em 2006, é a lei que protege as mulheres contra a violência doméstica no Brasil.</p>
            <p>Ela define que a violência pode ser <strong>Física, Psicológica, Sexual, Patrimonial ou Moral</strong> e permite a criação de Medidas Protetivas de Urgência.</p>
        `;
    } 
    else if (opcao === 'denuncia') {
        area.innerHTML = `
            <h2>Como Denunciar?</h2>
            <p>Você pode pedir ajuda de forma anônima e gratuita:</p>
            <ul>
                <li><strong>Ligue 180:</strong> Central de Atendimento à Mulher (funciona 24 horas).</li>
                <li><strong>Ligue 190:</strong> Polícia Militar (para emergências que estão acontecendo no momento).</li>
            </ul>
        `;
    } 
    else if (opcao === 'apoio') {
        area.innerHTML = `
            <h2>Rede de Apoio</h2>
            <p>Existem lugares que oferecem ajuda psicológica e defesa gratuita:</p>
            <ul>
                <li><strong>DEAM:</strong> Delegacia da Mulher.</li>
                <li><strong>Defensoria Pública:</strong> Advogados gratuitos pelo Estado.</li>
                <li><strong>Casas-Abrigo:</strong> Locais seguros para acolher a vítima e seus filhos.</li>
            </ul>
        `;
    }
}
