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
            <strong class="titulo-secao">Lei Maria da Penha (Lei nº 11.340/2006)</strong>
            <p>Sancionada em 7 de agosto de 2006, é a principal lei no Brasil voltada à prevenção e punição da violência doméstica e familiar contra a mulher.</p>
            <p>Garante <strong>Medidas Protetivas de Urgência</strong>, tais como afastamento imediato do agressor do lar e proibição de aproximação ou contato com a vítima.</p>
            <strong style="color:#6a1b9a;">Os 5 Tipos de Violência Previstos:</strong>
            <ul>
                <li><strong>Física:</strong> Qualquer conduta que ofenda a integridade ou saúde corporal.</li>
                <li><strong>Psicológica:</strong> Ações que causam dano emocional, humillation ou controle de ações.</li>
                <li><strong>Sexual:</strong> Presenciar ou participar de relação sexual não desejada mediante coerção.</li>
                <li><strong>Patrimonial:</strong> Subtração, retenção ou destruição de bens e documentos.</li>
                <li><strong>Moral:</strong> Atos de calúnia, difamação ou injúria.</li>
            </ul>
        `;
    } else if (opcao === 'denuncia') {
        areaConteudo.innerHTML = `
            <strong class="titulo-secao">Como e Onde Denunciar</strong>
            <p>Canais oficiais, gratuitos, seguros e confidenciais disponíveis para pedido de socorro ou orientação:</p>
            <ul>
                <li><strong>Ligue 180 (Central de Atendimento à Mulher):</strong> Serviço gratuito e anônimo, disponível 24 horas por dia em todo o Brasil.</li>
                <li><strong>Ligue 190 (Polícia Militar):</strong> Indicado para situações de emergência ou quando a agressão estiver acontecendo em tempo real.</li>
                <li><strong>WhatsApp Ligue 180:</strong> Envie mensagem para (61) 99656-5008 para atendimento via chat.</li>
                <li><strong>Aplicativo Direitos Humanos Brasil:</strong> Registro de denúncias diretamente pelo celular.</li>
            </ul>
        `;
    } else if (opcao === 'apoio') {
        areaConteudo.innerHTML = `
            <strong class="titulo-secao">Rede de Apoio Presencial</strong>
            <p>Órgãos públicos e serviços capacitados para oferecer suporte social, psicológico e jurídico gratuito:</p>
            <ul>
                <li><strong>DEAM:</strong> Delegacia Especializada de Atendimento à Mulher.</li>
                <li><strong>CRAM / RAM:</strong> Centros de Referência de Atendimento à Mulher com suporte psicológico e social.</li>
                <li><strong>CRAS / CREAS:</strong> Unidades de assistência social do município para acompanhamento familiar.</li>
                <li><strong>Defensoria Pública da Mulher:</strong> Assistência jurídica gratuita a quem não pode arcar com honorários de advogados.</li>
                <li><strong>Casas-Abrigo:</strong> Acolhimento sigiloso para mulheres e dependentes em situação de risco grave.</li>
            </ul>
        `;
    }
}
