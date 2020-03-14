// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
//create and define elements
const header = document.createElement('div');
const date = document.createElement('span');
const title = document.createElement('h1');
const temp = document.createElement('span');

//add classes if any
header.classList.add('header'); 
date.classList.add('date');
temp.classList.add('temp');

// add text content here
date.textContent = "SMARCH 28, 2019";
title.textContent = "Lambda Times";
temp.textContent = "98°";  

//append elements here
header.append(date, title, temp);

return header;
}

//grab the parent element from html and append the create header
const headerContainer = document.querySelector('.header-container');
headerContainer.append(Header());

// console.log(headerContainer);

