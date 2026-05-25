

/* =========================================
   CINEMATIC TRANSITIONS
========================================= */

const heroSection =
  document.getElementById("hero-section");

const projectsWrapper =
  document.querySelector(".projects-wrapper");

const contactWrapper =
  document.querySelector(".contact-wrapper");

const projectsSection =
  document.getElementById("projects-section");

const contactSection =
  document.getElementById("contact-section");

/* SCROLL SYSTEM */

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  /* HERO → PROJECTS */

  const projectsOffset =
    projectsSection.offsetTop;

  const heroTriggerStart =
    projectsOffset - window.innerHeight;

  const heroTriggerEnd =
    projectsOffset - 100;

  const heroProgress =
    Math.min(
      Math.max(
        (scrollY - heroTriggerStart) /
        (heroTriggerEnd - heroTriggerStart),
        0
      ),
      1
    );

  /* HERO EXIT */

  heroSection.style.transform =
    `translateX(${-heroProgress * 10}%)`;

  heroSection.style.opacity =
    1 - (heroProgress * 0.45);

  /* PROJECTS ENTER */

  projectsWrapper.style.transform =
    `translateX(${18 - (heroProgress * 18)}%)`;

  projectsWrapper.style.opacity =
    heroProgress;

  /* PROJECTS → CONTACT */

  const contactOffset =
    contactSection.offsetTop;

  const contactTriggerStart =
    contactOffset - window.innerHeight;

  const contactTriggerEnd =
    contactOffset - 100;

  const contactProgress =
    Math.min(
      Math.max(
        (scrollY - contactTriggerStart) /
        (contactTriggerEnd - contactTriggerStart),
        0
      ),
      1
    );

  /* PROJECTS EXIT */

  projectsWrapper.style.transform =
    `
      translateX(
        ${
          (18 - (heroProgress * 18))
          -
          (contactProgress * 10)
        }%
      )
    `;

  projectsWrapper.style.opacity =
    1 - (contactProgress * 0.4);

  /* CONTACT ENTER */

  contactWrapper.style.transform =
    `translateX(${18 - (contactProgress * 18)}%)`;

  contactWrapper.style.opacity =
    contactProgress;

});