let mobileOpen = false;
let language = "en";

function scrollToSection(id) {
  mobileOpen = false;

  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.add("hidden");

  const menuIcon = document.getElementById("menuIcon");
  menuIcon.setAttribute("data-lucide", "menu");

  lucide.createIcons();

  const el = document.querySelector(id);

  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
    });
  }
}

function toggleMobileMenu() {
  mobileOpen = !mobileOpen;

  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");

  if (mobileOpen) {
    mobileMenu.classList.remove("hidden");
    menuIcon.setAttribute("data-lucide", "x");
  } else {
    mobileMenu.classList.add("hidden");
    menuIcon.setAttribute("data-lucide", "menu");
  }

  lucide.createIcons();
}

function toggleLanguage() {
  language = language === "en" ? "sv" : "en";

  const langText = document.getElementById("desktop-lang");

  if (langText) {
    langText.textContent = language.toUpperCase();
  }

  console.log("Current language:", language);
}

function goHome() {
  window.location.href = "/";
}