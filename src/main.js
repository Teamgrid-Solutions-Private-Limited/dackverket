 function scrollToSection(id) {
  const section = document.querySelector(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // ✅ Update URL hash
    history.pushState(null, null, id);
  }

  // close mobile menu after click
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenu) {
    mobileMenu.classList.add("hidden");
  }
}
    window.toggleMobileMenu = () => {
  const mobileMenu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");
 
  mobileMenu.classList.toggle("hidden");
 
  // Optional icon switch
  if (mobileMenu.classList.contains("hidden")) {
    menuIcon.setAttribute("data-lucide", "menu");
  } else {
    menuIcon.setAttribute("data-lucide", "x");
  }
 
  lucide.createIcons();
};
  window.addEventListener("DOMContentLoaded", () => {
    // Hero title
    setTimeout(() => {
      const title = document.querySelector(".hero-title");
      title.classList.remove("opacity-0", "translate-y-10");
      title.classList.add("opacity-100", "translate-y-0");
      title.style.transition = "all 0.8s ease-out";
    }, 100);

    // Subtitle
   // Subtitle
const subtitles = document.querySelectorAll(".hero-subtitle");

subtitles.forEach((subtitle, index) => {
  setTimeout(() => {
    subtitle.classList.remove("opacity-0", "translate-y-8");
    subtitle.classList.add("opacity-100", "translate-y-0");
    subtitle.style.transition = "all 0.8s ease-out";
  }, 300 + index * 200);
});

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

  // Workshop image fade animation
const workshopImage = document.getElementById("workshop-image");

if (workshopImage) {
  const workshopObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = "opacity 1.2s ease-out";
          entry.target.style.opacity = "1";

          workshopObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  workshopObserver.observe(workshopImage);
}
 // ABOUT SECTION ANIMATION
const aboutSection = document.getElementById("about");
const aboutContent = document.querySelector(".about-content");
const aboutImage = document.querySelector(".about-image");
const aboutQuotes = document.querySelector(".about-quotes");
const quoteCards = document.querySelectorAll(".quote-card");

const aboutSectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        // Main section
        aboutSection.classList.remove("opacity-0", "translate-y-10");
        aboutSection.classList.add("opacity-100", "translate-y-0");

        // Content
        setTimeout(() => {
          aboutContent.classList.remove("opacity-0", "translate-y-8");
          aboutContent.classList.add("opacity-100", "translate-y-0");
        }, 100);

        // Image
        setTimeout(() => {
          aboutImage.classList.remove("opacity-0", "translate-y-8");
          aboutImage.classList.add("opacity-100", "translate-y-0");
        }, 300);

        // Quotes wrapper
        setTimeout(() => {
          aboutQuotes.classList.remove("opacity-0", "translate-y-8");
          aboutQuotes.classList.add("opacity-100", "translate-y-0");
        }, 500);

        // Quote cards stagger
        quoteCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.remove("opacity-0", "translate-y-8");
            card.classList.add("opacity-100", "translate-y-0");
          }, 700 + index * 120);
        });

        aboutSectionObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

if (aboutSection) {
  aboutSectionObserver.observe(aboutSection);
}

// PRINCIPLES SECTION ANIMATION

const principlesSection = document.getElementById("principles");
const principlesHeader = document.querySelector(".principles-header");
const principleCards = document.querySelectorAll(".principle-card");

const principlesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {

        // Section animation
        principlesSection.classList.remove(
          "opacity-0",
          "translate-y-10"
        );

        principlesSection.classList.add(
          "opacity-100",
          "translate-y-0"
        );

        // Header animation
        setTimeout(() => {
          principlesHeader.classList.remove(
            "opacity-0",
            "translate-y-8"
          );

          principlesHeader.classList.add(
            "opacity-100",
            "translate-y-0"
          );
        }, 100);

        // Cards stagger animation
        principleCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.remove(
              "opacity-0",
              "translate-y-8"
            );

            card.classList.add(
              "opacity-100",
              "translate-y-0"
            );
          }, 250 + index * 120);
        });

        principlesObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

if (principlesSection) {
  principlesObserver.observe(principlesSection);
}

const workshopElements = document.querySelectorAll(".workshop-animate");

  const workshopObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.2 }
  );

  workshopElements.forEach((el) => {
    workshopObserver.observe(el);
  });

  // stagger cards animation
  const workshopCards = document.querySelectorAll(".workshop-card");

  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }, index * 80);
        }
      });
    },
    { threshold: 0.15 }
  );

  workshopCards.forEach((card) => {
    cardObserver.observe(card);
  });

    // Heading animation
  const whatWeDoElements = document.querySelectorAll(".whatwedo-animate");

  const whatWeDoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.2 }
  );

  whatWeDoElements.forEach((el) => {
    whatWeDoObserver.observe(el);
  });

  // Stagger cards animation
  const whatWeDoCards = document.querySelectorAll(".whatwedo-card");

  whatWeDoCards.forEach((card, index) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.classList.remove("opacity-0", "translate-y-10");
              card.classList.add("opacity-100", "translate-y-0");
            }, index * 120);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(card);
  });

  const foundersElements = document.querySelectorAll(".founders-animate");

  const foundersObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.2 }
  );

  foundersElements.forEach((el) => {
    foundersObserver.observe(el);
  });

  // Founder cards stagger animation
  const foundersCards = document.querySelectorAll(".founders-card");

  foundersCards.forEach((card, index) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.classList.remove("opacity-0", "translate-y-10");
              card.classList.add("opacity-100", "translate-y-0");
            }, index * 150);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(card);
  });

    const teamAnimations = document.querySelectorAll(".team-animate");

  const teamObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }, index * 120);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  teamAnimations.forEach((el) => {
    teamObserver.observe(el);
  });

   const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }, index * 150);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".contact-animate").forEach((el) => {
    contactObserver.observe(el);
  });
   const pressData = [
    {
      title: "Däckspecialisten in Köping joins Däckverket",
      date: "January 26, 2026",
      image:
        "https://www.dackverket.se/wp-content/uploads/2026/01/Sofie-och-Johan_Koping.webp",
      description:
        "Däckverket has acquired Däckspecialisten in Köping, Västmanland, the group's fifteenth acquisition.",
      swedishLink:
        "/press/dackspecialisten-koping-joins-dackverket",
    },

    {
      title: "Däckcenter in Ulricehamn joins Däckverket",
      date: "January 21, 2026",
      image:
        "https://www.dackverket.se/wp-content/uploads/2026/01/Ulricehamn-kopiera.webp",
      description:
        "Däckverket announces the acquisition of Däckcenter i Ulricehamn AB in Västra Götaland county.",
      swedishLink:
        "/press/dackcenter-ulricehamn-joins-dackverket",
    },

    {
      title: "Däckcenter in Borås joins Däckverket",
      date: "January 19, 2026",
      image:
        "https://www.dackverket.se/wp-content/uploads/2026/01/dackverket-boras.webp",
      description:
        "Däckverket announces the acquisition of Däckcenter i Borås AB in Västra Götaland county.",
      swedishLink:
        "/press/dackcenter-boras-joins-dackverket",
    },
     {
      title: "Erik Rydheimer tillträder som COO för Däckverket",
      date: "December 18, 2025",
      image:
        "https://www.dackverket.se/wp-content/uploads/2025/12/Erikv3.webp",
      description:
        "Däckverket meddelar att Erik Rydheimer den 12 januari 2026 tillträder rollen som Chief Operating Officer (COO) för gruppen. Tillsättningen är ett naturligt steg i Däckverkets tillväxtresa och syftar till att ytterligare stärka det operativa stödet till de entreprenörsledda verkstäderna inom gruppen.",
      swedishLink:
        "/press/dackcenter-boras-joins-dackverket",
    },
     {
      title: "Däckcenter in Borås joins Däckverket",
      date: "January 19, 2026",
      image:
        "https://www.dackverket.se/wp-content/uploads/2026/01/dackverket-boras.webp",
      description:
        "Däckverket announces the acquisition of Däckcenter i Borås AB in Västra Götaland county.",
      swedishLink:
        "/press/dackcenter-boras-joins-dackverket",
    },
     {
      title: "Däckcenter in Borås joins Däckverket",
      date: "January 19, 2026",
      image:
        "https://www.dackverket.se/wp-content/uploads/2026/01/dackverket-boras.webp",
      description:
        "Däckverket announces the acquisition of Däckcenter i Borås AB in Västra Götaland county.",
      swedishLink:
        "/press/dackcenter-boras-joins-dackverket",
    }
  ];
   document.querySelectorAll(".press-link").forEach((card) => {
    card.addEventListener("click", function (e) {
      e.preventDefault();

      const id = this.dataset.id;

      localStorage.setItem(
        "selectedPress",
        JSON.stringify(pressData[id])
      );

      window.location.href = "press-details.html";
    });
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