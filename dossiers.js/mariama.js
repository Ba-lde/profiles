


// animation pour les noms
// Les mots à afficher
const texts = ["Developer", "Designer", "Mariama"];

// index du mot actuel
let textIndex = 0;

// index des lettres
let charIndex = 0;

// état : écrire ou effacer
let isDeleting = false;

// élément HTML
const element = document.getElementById("typing-text");

// fonction principale
function typeWriter() {

  // mot actuel
  let currentText = texts[textIndex];

  // si on écrit
  if (!isDeleting) {

    // on ajoute une lettre
    element.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;

    // si mot terminé → pause puis effacer
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1000); // pause 1 seconde
      return;
    }

  } 
  // si on efface
  else {

    // on enlève une lettre
    element.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;

    // si tout est effacé → mot suivant
    if (charIndex === 0) {
      isDeleting = false;
      textIndex++;

      // boucle infinie
      if (textIndex === texts.length) {
        textIndex = 0;
      }
    }
  }

  // vitesse d'animation
  setTimeout(typeWriter, isDeleting ? 100 : 400);
}

// démarrer l'animation
typeWriter();







// CARROUSSEL EN JS

// 1. On récupère le rail et les points
const rail = document.getElementById('testimonial-rail');
const dots = document.querySelectorAll('.dot');

// 2. On ajoute l'écouteur de clic sur chaque point
dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    // On récupère le numéro du point cliqué (0, 1 ou 2)
    const index = dot.getAttribute('data-index');

    // 3. LE MOUVEMENT : On déplace le rail
    // Si index = 1, on déplace de -100%. Si index = 2, de -200%.
    rail.style.transform = `translateX(-${index * 100}%)`;

    // 4. MISE À JOUR DES POINTS (Couleurs)
    updateDots(index);
  });
});

function updateDots(activeIndex) {
  dots.forEach((dot, i) => {
    if (i == activeIndex) {
      dot.classList.replace('bg-gray-300', 'bg-gray-600');
    } else {
      dot.classList.replace('bg-gray-600', 'bg-gray-300');
    }
  });
}














// CUNTER EN JS

  // 1. On récupère tous les éléments avec la classe "counter"
  const counters = document.querySelectorAll('.counter');

  // 2. Fonction qui lance l'animation du compteur
  function startCounter(counter) {
    // 3. On récupère la valeur finale (data-target)
    const target = +counter.getAttribute('data-target');

    // 4. On initialise le compteur à 0
    let count = 0;

    // 5. Vitesse de l'animation (plus petit = plus rapide)
    const speed = target / 100;

    // 6. Fonction qui va augmenter progressivement le chiffre
    function updateCount() {
      // 7. Si on n'a pas encore atteint la valeur finale
      if (count < target) {
        // 8. On ajoute une petite valeur
        count += speed;

        // 9. On met à jour le texte (arrondi avec Math.floor)
        counter.innerText = Math.floor(count);

        // 10. On répète la fonction (animation)
        requestAnimationFrame(updateCount);
      } else {
        // 11. Quand on atteint la fin, on met la valeur exacte
        counter.innerText = target;
      }
    }

    // 12. On lance l'animation
    updateCount();
  }

  // 13. Observer pour détecter quand la section apparaît à l'écran
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // 14. Si l'élément est visible
      if (entry.isIntersecting) {
        // 15. On relance le compteur à chaque fois
        startCounter(entry.target);
      }
    });
  }, {
    threshold: 0.5 // 16. Déclenche quand 50% de l'élément est visible
  });

  // 17. On applique l'observer à chaque compteur
  counters.forEach(counter => {
    observer.observe(counter);
  });








// CARROUSSEL EN JS POUR LE BLOG

 const blogRail = document.getElementById('blog-rail');
const blogDots = document.querySelectorAll('.blog-dot');

blogDots.forEach((dot) => {
  dot.addEventListener('click', () => {
    const index = dot.getAttribute('data-blog');
    
    // On vérifie si on est sur mobile (écran < 768px)
    const isMobile = window.innerWidth < 768;
    
    // Si mobile : on décale de 100% par article
    // Si desktop : on décale de 33.33% par article
    const scrollAmount = isMobile ? index * 100 : index * 33.33;

    blogRail.style.transform = `translateX(-${scrollAmount}%)`;

    // Mise à jour des points
    blogDots.forEach(d => d.classList.replace('bg-gray-600', 'bg-gray-300'));
    dot.classList.replace('bg-gray-300', 'bg-gray-600');
  });
});