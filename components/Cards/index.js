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

//   </div> // this closes author

// </div> this closes card
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    // console.log(`this is response `, res);
    // console.log(`this is data `, res.data);
    // console.log(`this is articles `, res.data.articles);
    
    console.log(`Object converted to an array to use the array method `, Object.values(res.data.articles));
    Object.values(res.data.articles).forEach(a=>{
        // console.log(`this is a `, a);

    a.forEach(b =>{
        // console.log(`this is b`, b);
        cardParent.append(createArticleCard(b));
    })        

    })
})

.catch(error =>{
    console.log(`Something went wrong: ERROR`, error);
})


function createArticleCard(object){

    //create elements and define them here
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    // append elements here
    card.append(headline, author);
    author.append(imgContainer, authorName);
    imgContainer.append(img);

    // add classes if any
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    
    // add text content
    headline.textContent = object.headline;
    img.src = object.authorPhoto;
    authorName.textContent = object.authorName;
    

    return card;
}

const cardParent = document.querySelector('.cards-container');

