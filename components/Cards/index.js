// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>

//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>

//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>{
//   console.log(`this is response `, response);  
//   console.log(`this is data `, response.data)
//   console.log(`this is articles `, response.data.articles); 
//   console.log(`this is javascript `, response.data.articles.javascript); 

// response.data.articles.javascript.forEach(info =>{
//     console.log(`this is info `, info);    
//     newCard.append(createCard(info));
        
// })  

// console.log(Object.entries(response.data.articles));


//turn the object values into the array
// dig deeper
Object.values(response.data.articles).forEach(function(a){
    // console.log(`this is a`, a);    

// dig deeper again to get what you want    
a.forEach(function(b){
    console.log(`this is b`, b);
    newCard.append(createCard(b));
})
    
})

}).catch(error => {
    console.log("This is the error", error)
})




function createCard(object){

    //create and define elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    // add classes if any
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //append here
    card.append(headline, author, authorName);
    author.append(imgContainer);
    imgContainer.append(image);

    //text content here
    headline.textContent = object.headline;    
    image.src = object.authorPhoto;
    authorName.textContent = object.authorName;


    return card;
}

let newCard = document.querySelector('.cards-container');


