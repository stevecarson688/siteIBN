'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);



/**
 * close navbar when click on any navbar links
 */

const navLinks = document.querySelectorAll("[data-nav-link]");

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 100 ? header.classList.add("active")
    : header.classList.remove("active");
}

addEventOnElem(window, "scroll", headerActive);



/**
 * accordion toggle
 */

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () { this.classList.toggle("active"); }

addEventOnElem(accordionAction, "click", toggleAccordion);




/**
 * swiper
 */

/* const feedbacks = [
    {
      image: "/assets/images/ceo.webp",
      name: "Robin",
      designation: "Web Developer, Digi Agency",
      feedback:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      image: "images/image-2.jpg",
      name: "John",
      designation: "CEO, WallBook",
      feedback:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
    },
    {
      image: "images/image-3.jpg",
      name: "Eva",
      designation: "UX Designer, TechShow",
      feedback:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },
  ];

  let i = 0;
  let j = feedbacks.length;
  
  let testimonialCont = document.getElementById("testimonial-cont");
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");


  let showTestimonial = () => {
    testimonialCont.innerHTML = `
      <p>${feedbacks[i].feedback}</p>
      <img src=${feedbacks[i].image}>
      <h3>${feedbacks[i].name}</h3>
      <h6>${feedbacks[i].designation}</h6>
    `;
  };

  prev.addEventListener("click", () => {
    i = (j + i - 1) % j;
    showTestimonial();
  });
  next.addEventListener("click", () => {
    i = (j + i + 1) % j;
    showTestimonial();
  });
  
  window.onload = showTestimonial;





 */


$(document).ready(function(){
            $("#testimonial-slider").owlCarousel({
                items:2,
                itemsDesktop:[1000,2],
                itemsDesktopSmall:[990,2],
                itemsTablet:[768,1],
                pagination:true,
                navigation:false,
                navigationText:["",""],
                slideSpeed:1000,
                autoPlay:true
            });
        });















