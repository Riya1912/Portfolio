document.getElementById("menu-button").addEventListener("click", function() {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu.style.display === "none" || navMenu.style.display === "") {
      navMenu.style.display = "flex";
    } else {
      navMenu.style.display = "none";
    }
  });
  