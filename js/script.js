// Écouter l'événement de défilement de la page
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // Vérifier la position de défilement
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // Ajouter la classe navbar-scrolled lorsque la page est défilée
    document.getElementById("nav").classList.add("navbar-scrolled");
  } else {
    // Retirer la classe navbar-scrolled lorsque l'on revient en haut de la page
    document.getElementById("nav").classList.remove("navbar-scrolled");
  }
}
