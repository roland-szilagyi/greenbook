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