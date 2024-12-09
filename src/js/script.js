let foodItems = [
  {
    img : './src/assets/images/sample.jpeg',
    title : 'Töltött Káposzta',
    description : 'this is a description for item1',
    cooktime : 25,
  },
  {
    img : './src/assets/images/sample.jpeg',
    title : 'Mákos tészta',
    description : '',
    cooktime : 50,
  }
]

let carouselCard = document.querySelector('.js-carouselcard');
let ofTheWeekTime = document.querySelector('.js-cooktime');
let titleName = document.querySelector('.js-titlename');
let foodItemImg = foodItems[0].img;
let foodItemTitle = foodItems[0].title;
let foodItemDescription = foodItems[0].description;
let cookTime = foodItems[0].cooktime;

// carouselCard.innerHTML = `
//   <img src="${foodItemImg}"/img>
//   <h2>${foodItemTitle}</h2>
//   <p>${foodItemDescription}</p>
// `;

ofTheWeekTime.innerHTML = cookTime + " perc";
titleName.innerHTML = foodItemTitle;

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".category__carousel__cont");
  const nextButton = document.querySelector(".carousel__btn--next");
  const prevButton = document.querySelector(".carousel__btn--prev");

  const visibleItems = 3; // Hány elemet szeretnél egyszerre látni
  const itemWidth = carousel.children[0].clientWidth; // Egy elem szélessége
  const totalItems = carousel.children.length; // Összes elem száma
  let currentIndex = 0; // Indulás az első elemtől

  // 1. Lapozás frissítése
  const updateCarousel = () => {
    carousel.style.transition = "transform 0.3s ease-in-out";
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    // 2. Gombok állapotának kezelése
    prevButton.disabled = currentIndex === 0; // Az előző gomb tiltása, ha az elején vagyunk
    nextButton.disabled = currentIndex >= totalItems - visibleItems; // A következő gomb tiltása, ha a végén vagyunk
  };

  // 3. Következő gomb
  nextButton.addEventListener("click", () => {
    if (currentIndex < totalItems - visibleItems) {
      currentIndex++;
      updateCarousel();
    }
  });

  // 4. Előző gomb
  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // 5. Görgetés kezelése touchmove és wheel eseményeken keresztül
  carousel.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) { // Görgetés lefelé
      if (currentIndex < totalItems - visibleItems) {
        currentIndex++;
      }
    } else { // Görgetés felfelé
      if (currentIndex > 0) {
        currentIndex--;
      }
    }
    updateCarousel();
  });

  carousel.addEventListener("touchmove", (event) => {
    const touchMoveDistance = event.touches[0].clientX;
    const direction = touchMoveDistance < itemWidth / 2 ? -1 : 1;

    if ((currentIndex > 0 && direction < 0) || (currentIndex < totalItems - visibleItems && direction > 0)) {
      currentIndex += direction;
    }

    updateCarousel();
  });

  // 6. Kezdeti frissítés
  updateCarousel();
});

///////////////////// ------ HAMBURGER MENü LOGIKA

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".js-icon--menu");
  const navLists = document.querySelectorAll(".nav-list"); // Minden .nav-list elem
  const menuDisplay = document.querySelector(".menu-display");

  // Menüt nyitó/záró esemény
  menuIcon.addEventListener("click", (event) => {
    event.stopPropagation(); // Megakadályozza, hogy az esemény továbbterjedjen a document-re
    if (menuDisplay.classList.contains("show")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Bárhova máshova kattintva a menü bezáródik
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".menu-display") && !event.target.closest(".js-icon--menu")) {
      closeMenu();
    }
  });

  function openMenu() {
    menuDisplay.classList.add("show");

    // Gyűjtsük össze az összes nav-list elemeit
    let items = "";
    navLists.forEach(navList => {
      items += Array.from(navList.querySelectorAll("a"))
        .map(item => `<div>${item.outerHTML}</div>`)
        .join("");
    });

    menuDisplay.innerHTML = items;
  }

  function closeMenu() {
    menuDisplay.classList.remove("show");
    menuDisplay.innerHTML = "";
  }
});
