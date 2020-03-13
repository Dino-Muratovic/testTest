// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response =>{
    // console.log(`this is topics `, response.data.topics);
    response.data.topics.forEach(index =>{
        // console.log(`this is index `, index);
        newTab.append(newTabComponent(index));
        // console.log(`this is index `, index);
    })

})

.catch(error => {
    console.log("This is the error", error)
})

function newTabComponent (data){
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = data. topics;   


    return tab;
}

const newTab = document.querySelector('.topics');
// newTab.append();
