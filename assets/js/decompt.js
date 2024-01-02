function startCountdown() {
    function countdown() {
      const targetDate = new Date();
      targetDate.setHours(24, 0, 0, 0); // Définition de la date cible à 24h00
  
      const timer = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;
  
        // Calcul des heures, minutes et secondes restantes
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);
  
        // Affichage du compte à rebours dans les correspondantes
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

         // Affichage du compte à rebours dans les correspondantes
         document.getElementById('hours1').textContent = hours.toString().padStart(2, '0');
         document.getElementById('minutes1').textContent = minutes.toString().padStart(2, '0');
         document.getElementById('seconds1').textContent = seconds.toString().padStart(2, '0');
  
        // Arrêt du compte à rebours lorsque la date cible est atteinte
        if (distance < 0) {
          clearInterval(timer);
          // Recommencer le compte à rebours
          startCountdown();
        }
      }, 1000); // Mise à jour toutes les secondes
    }
  
    // Utilisation de la fonction
    countdown();
  }
  
  // Démarrer le compte à rebours initial
  startCountdown();