document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const carousel = document.querySelector(".carousel");

  function autoSlide() {
    index = (index + 1) % totalSlides;
    updateCarousel();
  }

  function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(autoSlide, 3000);

  const navLinks = document.querySelectorAll("#sideNav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const sideNav = document.getElementById("sideNav");
      sideNav.classList.remove("show");
    });
  });
 const sideNav = document.getElementById("sideNav");
  const hamburger = document.querySelector(".hamburger");

  window.addEventListener("click", (e) => {
   
    if (
      sideNav.classList.contains("show") &&
      !sideNav.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      sideNav.classList.remove("show");
    }
  });
  let currentlyOpenModal = null;

  function setupModal(triggerSelector, modalSelector, closeSelector) {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.getElementById(modalSelector);
    const closeBtn = document.getElementById(closeSelector);

    if (triggers.length > 0 && modal) {
      triggers.forEach((trigger) => {
        trigger.addEventListener("click", (event) => {
          event.preventDefault();

          if (currentlyOpenModal && currentlyOpenModal !== modal) {
            currentlyOpenModal.style.display = "none";
          }

          modal.style.display = "block";
          document.body.style.overflow = "hidden";
          currentlyOpenModal = modal;
        });
      });

      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          modal.style.display = "none";
          document.body.style.overflow = "auto";
          currentlyOpenModal = null;
        });
      }

      window.addEventListener("click", (event) => {
        if (currentlyOpenModal && event.target === currentlyOpenModal) {
          currentlyOpenModal.style.display = "none";
          document.body.style.overflow = "auto";
          currentlyOpenModal = null;
        }
      });
    }
  }

  setupModal(".open-faq", "faq-container", "close-faq");
  setupModal(".open-privacy", "privacy", "close-privacy");
  setupModal(".open-terms", "terms", "close-terms");
  setupModal(".open-support", "support", "close-support");
});
function toggleNav() {
      const sideNav = document.getElementById('sideNav');
      sideNav.classList.toggle('show');
      
    }
