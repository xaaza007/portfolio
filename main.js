$(document).ready(function () {

  ScrollReveal().reveal(".anim");
  ScrollReavel({ reset: true });

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  };

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  };
});