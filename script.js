let tamanhoFonteAtual = 100;

function toggleConfiguracoes() {
    const painel = document.getElementById('painel-config');
    painel.style.display = (painel.style.display === 'block') ? 'none' : 'block';
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

function mostrarConteudo(opcao) {
    const areaConteudo = document.getElementById('conteudo-dinamico');

    if (opcao === 'lei') {
        areaConteudo.innerHTML = `
            <h2>O que é a Lei Maria da Penha?</h2>
            <p>Sancionada em 7 de agosto de 2006 (Lei nº 11.340), é o principal instrumento no Brasil para prevenir e combater a violência doméstica contra a mulher.</p>
            <p>Garante <strong>Medidas Protetivas de Urgência</strong>, como o afastamento do agressor do lar e a proibição de aproximação da vítima.</p>
            <h3>Tipos de Violência Reconhecidos:</h3>
            <ul>
                <li><strong>Física:</strong> Qualquer ato contra a integridade ou saúde corporal.</li>
                <li><strong>Psicológica:</strong> Dano emocional, chantagem ou controle.</li>
                <li><strong>Sexual:</strong> Coerção para atos sexuais não desejados.</li>
                <li><strong>Patrimonial:</strong> Retenção ou destruição de bens e documentos.</li>
                <li><strong>Moral:</strong> Calúnia, difamação ou injúria.</li>
            </ul>
        `;
    } else if (opcao === 'denuncia') {
        areaConteudo.innerHTML = `
            <h2>Como Denunciar?</h2>
            <p>Canais gratuitos e confidenciais disponíveis para pedido de socorro ou orientação:</p>
            <ul>
                <li><strong>Ligue 180:</strong> Central de Atendimento à Mulher (24h, gratuito e anônimo).</li>
                <li><strong>Ligue 190:</strong> Polícia Militar (em emergências imediatas ou flagrantes).</li>
                <li><strong>Aplicativo Direitos Humanos Brasil:</strong> Registro de denúncias pela internet.</li>
            </ul>
        `;
    } else if (opcao === 'apoio') {
        areaConteudo.innerHTML = `
            <h2>Rede de Apoio</h2>
            <p>Órgãos públicos especializados para acolhimento jurídico, social e psicológico:</p>
            <ul>
                <li><strong>DEAM:</strong> Delegacia Especializada de Atendimento à Mulher.</li>
                <li><strong>CRAS / CREAS:</strong> Centros de referência em assistência social do município.</li>
                <li><strong>Defensoria Pública:</strong> Assistência jurídica gratuita para vítimas.</li>
            </ul>
        `;
    }
}
