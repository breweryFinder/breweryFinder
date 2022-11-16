// Step 1a:
// Create namespace
const breweryApp = {};

// Step 1b:
// Fetching by_city and by_type from Brewery API:
// City and Type are separate calls
// By City 
breweryApp.getAPI = (city, type) => {
    
    const breweryUrl = new URL('https://api.openbrewerydb.org/breweries');
    breweryUrl.search = new URLSearchParams({
        by_city: city,
        by_type: type
    })
    fetch(breweryUrl)
    .then(res => {
    return res.json();
    })
    .then(data => {
        console.log('Brewery Data', data);
        breweryApp.displayData(data);
    })
}


// Step 1c: CREATE INIT (see below)

// Step 2:
// POST-API
// Function to display Breweries
breweryApp.displayData = (results) => {
    results.forEach((result) => {
        
        const breweryName = document.createElement('h2');
        breweryName.innerText = result.name;
        // console.log(result.name)
        console.log(breweryName)

        const breweryCity = document.createElement('h4');
        breweryCity.innerText = result.city;
        // console.log(result.city)
        console.log(breweryCity)
        
        const breweryType = document.createElement('h3');
        breweryType.innerText = result.brewery_type;
        // console.log(result.brewery_type)
        console.log(breweryType)
        
        const breweryContainer = document.createElement('li');
        breweryContainer.classList.add('breweryBox')

        breweryContainer.append(breweryName, breweryType, breweryCity);

        document.querySelector('#breweryDisplay').append(breweryContainer);

    })
}

// Step 3a:
// Get user's input from 'City' and 'Brewery Type'
// Add eventListeners to BOTH drop down menus
// NOTE: Right now the drop down input is collected when a city is chosen, but we want to take the values of BOTH city and type WITHIN the SUBMIT BUTTON.... or do we?
// event.preventDefault() - DO WE NEED IT?

// All User Input
// breweryApp.getUserInput = () => {
//         // listen for when the user makes a change in the drop down
//         // get the value of the selected option
//         document.querySelector('#city').addEventListener('change', function(){
//             console.log(this.value)
//             const citySelection = this.value;
//             breweryApp.getBreweryType(citySelection);
//         })
// }

breweryApp.getValues = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
            const city = document.querySelector("#cities").value
            console.log(city)
            const type = document.querySelector('#type').value
            console.log(type)
            breweryApp.getAPI(city, type);
    })
}

// Brewery Type Input
// breweryApp.getTypeInput = () => {
//         // listen for when the user makes a change in the drop down
//         // get the value of the selected option
//         document.querySelector('#breweryType').addEventListener('change', function(){
//             // console.log(this.value)
//             const breweryTypeSelection = this.value;
//             breweryApp.getBreweryType(breweryTypeSelection);
//         })
// }

// Step 3b:
// Evaluate input from BOTH drop downs (if/else?)

// Step 1c:
// Create init
breweryApp.init = () => {
    breweryApp.getValues();
}

breweryApp.init();

// Step 3b:
// Loop through said API array/values and FILTER user's chosen City against their Brewery Type in the array.

// Phase 2
// Step 1:
// Create a randomizer function/button that will send user to a random brewery/pub website in another window. Possible text "Send me to a random place!"

// Step 2:
// In CSS let's add some nice transitions for when the 'info cards' appear

