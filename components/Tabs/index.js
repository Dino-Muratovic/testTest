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

.then(response => {
    // console.log(`this is response `, response);
    // console.log(`this is data `, response.data);
    // console.log(`this is topics `, response.data.topics);

    response.data.topics.forEach(item =>{
        // console.log(`this is a `, item);

        //this part is a little confusing so be careful
        tabHolder.append(addComponent(item));        
    })
})

.catch(error => {
    console.log(`Oops there was an error `, error);
})


function addComponent(arrayItem){
//create element
const tab = document.createElement('div');
tab.classList.add('tab');
tab.textContent = arrayItem;

// console.log(`this is tab `, tab);


    return tab;
}

const tabHolder = document.querySelector('.topics');

