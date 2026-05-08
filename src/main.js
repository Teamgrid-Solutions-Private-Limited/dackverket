
  window.addEventListener("DOMContentLoaded", () => {
    // Hero title
    setTimeout(() => {
      const title = document.querySelector(".hero-title");
      title.classList.remove("opacity-0", "translate-y-10");
      title.classList.add("opacity-100", "translate-y-0");
      title.style.transition = "all 0.8s ease-out";
    }, 100);

    // Subtitle
    setTimeout(() => {
      const subtitle = document.querySelector(".hero-subtitle");
      subtitle.classList.remove("opacity-0", "translate-y-8");
      subtitle.classList.add("opacity-100", "translate-y-0");
      subtitle.style.transition = "all 0.8s ease-out";
    }, 300);

    // Buttons
    setTimeout(() => {
      const buttons = document.querySelector(".hero-buttons");
      buttons.classList.remove("opacity-0", "translate-y-5");
      buttons.classList.add("opacity-100", "translate-y-0");
      buttons.style.transition = "all 0.6s ease-out";
    }, 600);

    // Stats
    setTimeout(() => {
      const stats = document.querySelector(".hero-stats");
      stats.classList.remove("opacity-0", "translate-y-5");
      stats.classList.add("opacity-100", "translate-y-0");
      stats.style.transition = "all 0.8s ease-out";
    }, 900);

    // Scroll indicator
    setTimeout(() => {
      const scroll = document.querySelector(".scroll-indicator");
      scroll.classList.remove("opacity-0");
      scroll.classList.add("opacity-100");
      scroll.style.transition = "opacity 0.8s ease";
    }, 1200);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-8");
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.2 },
  );

  observer.observe(document.getElementById("contact-content"));

  const valueCards = document.querySelectorAll(".value-card");

  const valueObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("opacity-0", "translate-y-8");
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.style.transition =
              "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)";
          }, index * 100);
        }
      });
    },
    { threshold: 0.2 },
  );

  valueCards.forEach((card) => valueObserver.observe(card));

  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-8");
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.2 },
  );

  aboutObserver.observe(document.getElementById("about-content"));

  document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("workshopsHeading");
    const cards = document.querySelectorAll("#workshopsGrid a");

    // Initial state
    heading.style.opacity = "0";
    heading.style.transform = "translateY(30px)";

    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Heading animation
            heading.style.transition = "all 0.8s ease-out";
            heading.style.opacity = "1";
            heading.style.transform = "translateY(0)";

            // Cards stagger animation
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.style.transition = "all 0.6s ease-out";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
              }, index * 100);
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(document.getElementById("workshops"));
  });

  // Team header animation
  const teamHeaderObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.style.transition = "all 0.8s ease-out";
        }
      });
    },
    { threshold: 0.2 },
  );

  document.querySelectorAll(".team-header").forEach((item) => {
    teamHeaderObserver.observe(item);
  });

  // Team cards stagger animation
  const teamCardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.style.transition = "all 0.7s ease-out";
          }, index * 150);
        }
      });
    },
    { threshold: 0.2 },
  );

  document.querySelectorAll(".team-card").forEach((card) => {
    teamCardObserver.observe(card);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("pressHeading");
    const cards = document.querySelectorAll("#pressGrid .press-item");
    const btnContainer = document.getElementById("pressButtonContainer");
    const INITIAL_COUNT = 6;
    let expanded = false;

    // Hide cards after 6th
    if (cards.length > INITIAL_COUNT) {
      cards.forEach((card, idx) => {
        if (idx >= INITIAL_COUNT) card.classList.add("hidden");
      });
    }

    // Heading animation
    if (heading) {
      const headingObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              heading.classList.remove("opacity-0", "translate-y-8");
              heading.classList.add("opacity-100", "translate-y-0");
            }
          });
        },
        { threshold: 0.2 },
      );
      headingObserver.observe(heading);
    }

    // Card stagger animation
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (
            entry.isIntersecting &&
            entry.target.classList.contains("opacity-0")
          ) {
            setTimeout(() => {
              entry.target.classList.remove("opacity-0", "translate-y-8");
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, idx * 100);
          }
        });
      },
      { threshold: 0.15 },
    );
    cards.forEach((card) => cardsObserver.observe(card));

    // Create toggle button if more than 6 cards
    function createToggleButton() {
      if (cards.length <= INITIAL_COUNT) return;
      btnContainer.innerHTML = `
      <button id="togglePressBtn" class="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition">
       Show all (${cards.length - INITIAL_COUNT})
      </button>
    `;
      const toggleBtn = document.getElementById("togglePressBtn");
      toggleBtn.addEventListener("click", () => {
        expanded = !expanded;
        if (expanded) {
          cards.forEach((card) => card.classList.remove("hidden"));
          toggleBtn.textContent = "Show less";
        } else {
          cards.forEach((card, idx) => {
            if (idx >= INITIAL_COUNT) card.classList.add("hidden");
          });
          toggleBtn.textContent = `Show all (${cards.length - INITIAL_COUNT})`;
          document
            .querySelector("#press")
            .scrollIntoView({ behavior: "smooth" });
        }
      });
    }
    createToggleButton();
  });
 window.scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (!element) return;
    const navHeight = document.querySelector("nav").offsetHeight;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - navHeight - 16, // extra 16px margin
      behavior: "smooth"
    });
  };
