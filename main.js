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

document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("background");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add(
            "opacity-100",
            "translate-y-0"
          );

          section.classList.remove(
            "opacity-0",
            "translate-y-8"
          );
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  section.classList.add(
    "opacity-0",
    "translate-y-8",
    "transition-all",
    "duration-700"
  );

  observer.observe(section);
});