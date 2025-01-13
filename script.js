 // Data do início do namoro
 const startDate = new Date('2024-09-11T19:43:00Z');

 // Função para atualizar o contador
 function updateCounter() {
     const now = new Date();
     const nowInLondon = new Date(
         now.toLocaleString('en-US', { timeZone: 'Europe/London' })
     );
 
     const diff = nowInLondon - startDate;
 
     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
     const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
     const minutes = Math.floor((diff / (1000 * 60)) % 60);
     const seconds = Math.floor((diff / 1000) % 60);
 
     document.getElementById('days').textContent = days;
     document.getElementById('hours').textContent = hours;
     document.getElementById('minutes').textContent = minutes;
     document.getElementById('seconds').textContent = seconds;
 }
 
 // Atualiza o contador a cada segundo
 setInterval(updateCounter, 1000);
 