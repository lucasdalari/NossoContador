// Data do início do namoro
const startDate = new Date('2024-09-11T20:43:00Z');

// Função para pluralizar as palavras "ano", "dia", "hora", "minuto", "segundo"
function pluralize(value, singular, plural) {
    return value === 1 || value === 0 ? singular : plural;
}

// Função para atualizar o contador
function updateCounter() {
    const now = new Date();
    const nowInLondon = new Date(
        now.toLocaleString('en-US', { timeZone: 'Europe/London' })
    );
 
    const diff = nowInLondon - startDate;
 
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); // Cálculo do ano
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 365; // Dias restantes após o ano completo
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Mostrar "ano" apenas após 1 ano completo
    if (years > 0) {
        document.getElementById('years').textContent = years;
        document.getElementById('year-text').style.display = 'inline'; // Exibe o texto "ano"
        document.getElementById('year-text').textContent = pluralize(years, 'ano', 'anos'); // Pluraliza o ano
    } else {
        document.getElementById('years').textContent = ''; // Oculta o valor do ano
        document.getElementById('year-text').style.display = 'none'; // Oculta o texto "ano"
    }

    // Atualizando os textos no HTML com pluralização
    document.getElementById('days').textContent = days;
    document.getElementById('days-text').textContent = pluralize(days, 'dia', 'dias');
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('hours-text').textContent = pluralize(hours, 'hora', 'horas');
    
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('minutes-text').textContent = pluralize(minutes, 'minuto', 'minutos');
    
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('seconds-text').textContent = pluralize(seconds, 'segundo', 'segundos');
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);

// Corações caindo

// Seleciona o contêiner de corações
const heartContainer = document.querySelector('.falling-hearts');

// Configurações para a quantidade e comportamento dos corações
const spawnInterval = 200; // Intervalo para criar novos corações em milissegundos
const maxVisibleHearts = 100; // Limite de corações visíveis ao mesmo tempo

// Função para criar um coração
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.textContent = '♡';

    // Define propriedades baseadas na visualização do site
    const size = Math.random() * 2 + 1; // Tamanho entre 1rem e 3rem
    const screenHeight = window.innerHeight; // Altura da tela em pixels
    const speed = Math.random() * 30 + 20; // Velocidade entre 20 e 50 pixels por segundo
    const duration = screenHeight / speed; // Duração calculada para atravessar a tela
    const left = Math.random() * 100; // Posição horizontal aleatória

    // Estiliza o coração
    heart.style.fontSize = `${size}rem`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `0s`; // Sem atraso para começar a cair imediatamente
    heart.style.left = `${left}%`;

    // Adiciona o coração ao contêiner
    heartContainer.appendChild(heart);

    // Remove o coração após a animação completa
    setTimeout(() => {
        heart.remove();
    }, duration * 2000); // Remove após a animação (duração total)
}

// Função para controlar o número de corações visíveis
function manageHearts() {
    if (heartContainer.childElementCount < maxVisibleHearts) {
        createHeart();
    }
}

// Recria corações continuamente com limite de visibilidade
setInterval(manageHearts, spawnInterval); // Controla a criação de corações

function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobile()) {
    // Carregar scripts ou alterar comportamentos específicos para dispositivos móveis
    document.body.classList.add('mobile'); // Adiciona uma classe para estilos móveis específicos
}
