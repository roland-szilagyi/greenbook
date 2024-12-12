export let foodDetails = [
  { 
    name : 'paprikaskrumpli',
    description : 'description for food',
    category : 'maincourses',
    img : "./src/assets/images/sample.jpeg",
    preTime : 25,
    bakedTime : 35,
    tools : ['krumpli', 'fokhagyma', 'so', 'paprika', 'bors'],
    preparation : ['szöveg egy', 'szöveg kettö', 'szöveg harom'],
    date : '2024-12-09',
  },
  {
    name : 'mákos guba',
    description : 'description for food',
    category : 'maincourses',
    img : "./src/assets/images/sample2.jpeg",
    preTime : 10,
    bakedTime : 15,
    tools : ['mak', 'tej', 'kifli', 'cukor'],
    preparation : ['szöveg egy', 'szöveg kettö', 'szöveg harom'],
    date : '2024-12-22',
  },
];

// NAME
const name = document.querySelector('.js-name');
name.innerHTML = foodDetails[0].name;

// IMG
const img = document.querySelector('.js-img');
img.innerHTML = `<img src="${foodDetails[0].img}" alt="${foodDetails[0].name}"/>`;

// TIMES
const preTime = document.querySelector('.js-pre');
const bakedTime = document.querySelector('.js-baked');
const totalTime = document.querySelector('.js-total');
preTime.innerHTML = foodDetails[0].preTime + ' minutes';
bakedTime.innerHTML = foodDetails[0].bakedTime + ' minutes';
totalTime.innerHTML = foodDetails[0].preTime + foodDetails[0].bakedTime + ' minutes';

// TOOLS
const tools = document.querySelector('.js-tools');
tools.innerHTML = foodDetails[0].tools
  .map(tool => `<li>${tool}</li>`)
  .join('');

// PREPARATION
const preparation = document.querySelector('.js-preparation');
preparation.innerHTML = foodDetails[0].preparation
  .map((text, number) => `<p>${number}</p> <p>${text}</p>`)
  .join('');

// DATE
const date = document.querySelector('.js-date');
date.innerHTML = foodDetails[0].date;