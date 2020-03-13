// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get ('https://lambda-times-backend.herokuapp.com/topics')

.then(response => {
    console.log(`this is response `, response);
    console.log(`this is response data`, response.data);
    console.log(`this is reponse data topics`, response.data.topics);
    

    //map through topics
    response.data.topics.map(info =>{
        //append the created tab to the parent container -- still empty        
        tabsContainer.append(createTabs(info));  
    }) 

})
.catch(error => {
    console.log("This is the error", error)
})



// Create function here

function createTabs (object) {
    //create and define elements, add class and text content
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = object.topics;
   
    return tab;
};

//append created tab element to it's parent .topics


const tabsContainer = document.querySelector('.topics');
console.log(`this is where the tabs should go `, tabsContainer);




























// axios.get('https://lambda-times-backend.herokuapp.com/topics')
// .then(response =>{
//     // console.log(`this is response`, response)
//     console.log(`this is topics `, response.data.topics); // what needs to be pushed in 
//         response.data.topics.forEach(item =>{
//         console.log(`this is list item `, item);        
//         newTab.append(newTabComponent(item));
//         console.log(`this is newTab `, newTab);

//     })
     

// })

// .catch(error => {
//     console.log("This is the error", error)
// })

// function newTabComponent (data){
//     const tab = document.createElement('div');
//     tab.classList.add('tab');
//     tab.textContent = data.topics;   


//     return tab;
// }

// const newTab = document.querySelector('.topics');


