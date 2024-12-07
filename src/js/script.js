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

  // 5. Görgetés kezelése
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

  // 6. Kezdeti frissítés
  updateCarousel();
});