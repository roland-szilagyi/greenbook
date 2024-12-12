import { foodDetails } from "./fooddetails.js";

export function initializeCarousel() {
  let carouselCard = document.querySelector('.js-carouselcard');
  let ofTheWeekTime = document.querySelector('.js-cooktime');
  let titleName = document.querySelector('.js-titlename');
  let foodItemImg = foodDetails[0].img;
  let foodItemTitle = foodDetails[0].name;
  let foodItemDescription = foodDetails[0].description;
  let cookTime = foodDetails[0].bakedTime;

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
};