const language = document.getElementById("language");
const home = document.getElementById("home");
const service = document.getElementById("service");
const gallery = document.getElementById("gallery");
const contact = document.getElementById("contact-us");
const homeFooter = document.getElementById("Footerhome");
const serviceFooter = document.getElementById("Footerservice");
const galleryFooter = document.getElementById("Footergallery");
const contactFooter = document.getElementById("Footercontact-us");
const textHome = document.getElementById("textHome");
const textHometow = document.getElementById("textHometow");
const serviceOneLine = document.getElementById("serviceOneLine");
const serviceTowLine = document.getElementById("serviceTowLine");
const serviceThreeLine = document.getElementById("serviceThreeLine");
const serviceFourLine = document.getElementById("serviceFourLine");
const btnToggle = document.getElementById("btnToggle");
const navbar = document.getElementById("navbar");
const checkbox = document.getElementById("checkbox")
const slideLineOne = document.getElementById("slideLineOne")
const slideLineTwo = document.getElementById("slideLineTwo")
const slideLineThree = document.getElementById("slideLineThree")
const slideLineFour = document.getElementById("slideLineFour")


btnToggle.addEventListener("click", () => {
    const computedStyle = window.getComputedStyle(navbar);
    const currentLeft = computedStyle.getPropertyValue('left');
  
    if (currentLeft === "0px") {
      navbar.style.left = "-100%";
      checkbox.checked = false;
    } else {
      navbar.style.left = "0";
      checkbox.checked = true;
    }
  });

const LanguageEn = () => {
  home.innerHTML = "Home";
  homeFooter.innerHTML = "Home";
  service.innerHTML = "Service";
  serviceFooter.innerHTML = "Service";
  gallery.innerHTML = "Gallery";
  galleryFooter.innerHTML = "Gallery";
  contact.innerHTML = "Contact us";
  contact.innerHTMLFooter = "Contact us";
  // textHome.innerHTML = "Your best choice in the world of construction";
  // textHometow.innerHTML =
  //   "Company specializing in Mini-Excavation, Concrete, Asphalt and Earthworks.";
  serviceOneLine.innerHTML = "Excavation | Foundation | Facade | Landscaping";
  serviceTowLine.innerHTML =
    "Excavation, Leveling and Paving, Concrete Formwork Concrete Repair/Cracks";
  serviceThreeLine.innerHTML =
    "Foundation Waterproofing, Exterior Coatings ,Brick Restoration";
  serviceFourLine.innerHTML =
    "Landscaping, Interior Finishing, Landscaping Maintenance";
    slideLineOne.innerHTML =
    "Are you looking for professional services to carry out exterior work that will increase the value and strength of your property?";
    slideLineTwo.innerHTML =
    "AT CONSTRUCTION CEMTEC Inc. We are here to achieve this.";
    slideLineThree.innerHTML =
    "Call us to tell us about your projects";
    slideLineFour.innerHTML =
    "We will be happy to help you and offer you a free estimate";
  };
  const LanguageFr = () => {
    home.innerText = "Accueil";
  homeFooter.innerText = "Accueil";
  service.innerText = "Service";
  gallery.innerText = "Galerie";
  galleryFooter.innerText = "Galerie";
  contact.innerText = "Contactez-nous";
  // textHome.innerText = "Votre meilleur choix dans le monde de la construction";
  // textHometow.innerText =
  //   "Entreprise spécialisée en Mini-Excavation, Béton, Asphalte et Terrassement.";
  serviceOneLine.innerHTML = "Excavation | Fondation | Facade | Paysagement";
  serviceTowLine.innerHTML =
    "Excavation, Nivellement et Pavage, Coffrage de Béton Réparation de Béton/ Fissures";
  serviceThreeLine.innerHTML =
  " Imperméabilisation de Fondation ,Revêtements Extérieurs ,Restauration de Brique";
  serviceFourLine.innerHTML =
  "Aménagement Paysager ,Finition Intérieur ,Entretien Paysager";
  slideLineOne.innerHTML =
  "Êtes-vous à la recherche de services professionnels pour effectuer des travaux extérieurs qui augmenteront la valeur et la solidité de votre proprieté?";
  slideLineTwo.innerHTML =
  "À CONSTRUCTION CEMTEC Inc. Nous sommes la pour réaliser ca.";
  slideLineThree.innerHTML =
  "Appelez-nous pour nous parler de vos projets";
  slideLineFour.innerHTML =
  "Nous serons ravis de pouvoir vous aider et de vous offrir une estimation gratuite";
};

if (localStorage.getItem("lang") == null) {
  localStorage.setItem("lang", "en");
}
if (localStorage.getItem("lang") == "en") {
  language.src = "images/en.png";
  LanguageEn();
} else {
  language.src = "images/fr.png";
  LanguageFr();
}
language.addEventListener("click", () => {
  if (localStorage.getItem("lang") == "fr") {
    language.src = "images/en.png";
    localStorage.setItem("lang", "en");
    LanguageEn();
  } else {
    language.src = "images/fr.png";
    LanguageFr();
    localStorage.setItem("lang", "fr");
  }
});

let ourgallery = document.querySelectorAll(".gallery img");

ourgallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    let div = document.createElement("div");
    div.className = "modal";
    div.style.display = "block";

    let closebtn = document.createElement("span");
    closebtn.className = "close";
    closebtn.innerHTML = "X";

    let divbox = document.createElement("div");
    divbox.className = "modal-content";

    let imgBox = document.createElement("img");
    imgBox.src = img.src;

    if (img.alt !== null) {
      let imghead = document.createElement("h3");
      imghead.textContent = img.alt.toUpperCase();
      divbox.appendChild(imghead);
    }

    divbox.appendChild(imgBox);
    divbox.appendChild(closebtn);
    div.appendChild(divbox);
    document.body.appendChild(div);

    closebtn.addEventListener("click", () => {
      div.style.display = "none";
    });
  });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = (Math.random() * 100000) | 0;
    // these IDs from the previous steps
    emailjs.sendForm("service_5nx1l9r", "template_7iyhg9n", this).then(
      function () {
        console.log("SUCCESS!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    navbar.style.left = "-100%"
    checkbox.checked = false;
    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});

var btnUp = document.getElementById("btnUp");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    }
};

// Function to scroll to the top of the page when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
}

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
//   autoplay: {
//     delay: 3000, 
//     disableOnInteraction: false,
// },

});

document.addEventListener('DOMContentLoaded', function () {
  var currentSlide = 0;
  var slides = document.querySelectorAll('.carousel-item');
  var totalSlides = slides.length;

  function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
  }

  document.querySelector('.carousel-control-prev').addEventListener('click', function (e) {
    e.preventDefault();
    showSlide(currentSlide - 1);
  });

  document.querySelector('.carousel-control-next').addEventListener('click', function (e) {
    e.preventDefault();
    showSlide(currentSlide + 1);
  });

  function autoSlide() {
    showSlide(currentSlide + 1);
  }

  var slideInterval = setInterval(autoSlide, 5000); // تنقل تلقائيا كل 3 ثواني
  // إيقاف التنقل التلقائي عند التحكم يدويًا
  document.querySelector('.carousel-control-prev').addEventListener('click', function () {
    clearInterval(slideInterval);
  });

  document.querySelector('.carousel-control-next').addEventListener('click', function () {
    clearInterval(slideInterval);
  });
});

