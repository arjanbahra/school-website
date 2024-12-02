const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".hero-text", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".explore__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".job__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".offer__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});

ScrollReveal().reveal(".container1", {
  ...scrollRevealOption,
  interval: 500,
});





ScrollReveal().reveal(".categories", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".category", {
  ...scrollRevealOption,
  interval: 100,
});

ScrollReveal().reveal(".hero-section", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".menu-category", {
  ...scrollRevealOption,
  
  
});

ScrollReveal().reveal(".menu-items", {
  ...scrollRevealOption,
  
});

ScrollReveal().reveal(".menu-item", {
  ...scrollRevealOption,
  
  
});

ScrollReveal().reveal(".menu-items-mango", {
  ...scrollRevealOption,
  
});

ScrollReveal().reveal(".menu-item-mango", {
  ...scrollRevealOption,
  
  
});

ScrollReveal().reveal(".about", {
  ...scrollRevealOption,
  
  
});


ScrollReveal().reveal(".about-content", {
  ...scrollRevealOption,
  
  
});

ScrollReveal().reveal(".about-section", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".content", {
  ...scrollRevealOption,
  interval: 500,
  
});

ScrollReveal().reveal(".image", {
  ...scrollRevealOption,
  interval: 100,
  
  
});

ScrollReveal().reveal(".container2", {
  ...scrollRevealOption,
  
  
});

ScrollReveal().reveal(".image-container", {
  ...scrollRevealOption,
  interval: 500,
  
  
});

function performSearch(query) {
  const items = document.querySelectorAll('.menu-item');

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(query)) {
      item.style.display = 'block';
      item.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      item.style.display = 'none';
    }
  });
}

document.getElementById('search').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  performSearch(query);
});

document.getElementById('search').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault(); // Prevent form submission if inside a form
    const query = this.value.toLowerCase();
    performSearch(query);
  }
});
