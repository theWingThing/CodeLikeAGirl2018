window.addEventListener('load', function() {
  document.getElementById("hamburger").onclick = function() {
    var menu = document.querySelector(".navbar_menu");
    menu.classList.toggle('hidden');
  };
});