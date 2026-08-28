// ==========================================
// RUNE TRAVEL WEBSITE - INTERACTIVE LOGIC
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  // HAMBURGER MENU TOGGLE
  const hamburgerBtn = document.getElementById('hamburger-menu');
  const navMenu = document.getElementById('nav-menu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburgerBtn.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburgerBtn.classList.remove('active');
      });
    });
  }

  // CAROUSEL INTERACTIVITY
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const cards = document.querySelectorAll('.dest-card');
  const currentSlideEl = document.getElementById('current-slide');

  let activeIndex = 1; // Spiti Valley is active initially (index 1)

  function updateCarousel(newIndex) {
    if (newIndex < 0) {
      newIndex = cards.length - 1;
    } else if (newIndex >= cards.length) {
      newIndex = 0;
    }

    activeIndex = newIndex;

    cards.forEach((card, i) => {
      if (i === activeIndex) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    // Update Counter (01 / 03)
    if (currentSlideEl) {
      const slideNum = (activeIndex + 1).toString().padStart(2, '0');
      currentSlideEl.textContent = slideNum;
    }
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      updateCarousel(activeIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
      updateCarousel(activeIndex + 1);
    });
  }

  // Allow clicking on cards to make them active
  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      updateCarousel(index);
    });
  });

  // SEARCH INPUT INTERACTIVITY
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('focus', () => {
      searchInput.select();
    });
  }
});
