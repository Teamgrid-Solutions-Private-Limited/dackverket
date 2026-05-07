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

document.addEventListener("DOMContentLoaded", () => {

  const heading = document.getElementById("workshopsHeading");
  const cards = document.querySelectorAll(".workshop-card");

  // Heading Animation
  const headingObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          heading.classList.remove("opacity-0", "translate-y-8");
          heading.classList.add("opacity-100", "translate-y-0");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  headingObserver.observe(heading);

  // Cards Animation
  const cardsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {

          setTimeout(() => {
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-8"
            );

            entry.target.classList.add(
              "opacity-100",
              "translate-y-0"
            );
          }, index * 100);

        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  cards.forEach((card) => {
    cardsObserver.observe(card);
  });

});

document.addEventListener("DOMContentLoaded", () => {

  const heading = document.getElementById("pressHeading");
  const cards = document.querySelectorAll(".press-item");
  const toggleBtn = document.getElementById("togglePressBtn");

  const INITIAL_COUNT = 5;

  let expanded = false;

  // Hide cards after first 6
  cards.forEach((card, index) => {
    if (index >= INITIAL_COUNT) {
      card.classList.add("hidden");
    }
  });

  // Heading Animation
  const headingObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          heading.classList.remove(
            "opacity-0",
            "translate-y-8"
          );

          heading.classList.add(
            "opacity-100",
            "translate-y-0"
          );

        }

      });

    },
    {
      threshold: 0.2,
    }
  );

  headingObserver.observe(heading);

  // Cards Animation
  const cardsObserver = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

          setTimeout(() => {

            entry.target.classList.remove(
              "opacity-0",
              "translate-y-8"
            );

            entry.target.classList.add(
              "opacity-100",
              "translate-y-0"
            );

          }, index * 100);

        }

      });

    },
    {
      threshold: 0.15,
    }
  );

  cards.forEach((card) => {
    cardsObserver.observe(card);
  });

  // Toggle Button
  toggleBtn.addEventListener("click", () => {

    expanded = !expanded;

    if (expanded) {

      // Show all cards
      cards.forEach((card) => {
        card.classList.remove("hidden");
      });

      toggleBtn.textContent = "Show less";

    } else {

      // Hide cards after first 6
      cards.forEach((card, index) => {

        if (index >= INITIAL_COUNT) {
          card.classList.add("hidden");
        }

      });

      toggleBtn.textContent = `Show all (${cards.length})`;

      // Scroll to section
      document.querySelector("#press").scrollIntoView({
        behavior: "smooth",
      });

    }

  });

});