// Object for Namespacing
const breweryApp = {};

// API call
breweryApp.getBrewery = (city, type) => {
    
    const breweryUrl = new URL('https://api.openbrewerydb.org/breweries');
    breweryUrl.search = new URLSearchParams({
        by_city: city,
        by_type: type
    });
    fetch(breweryUrl)
    .then(res => {
        return res.json();
    })
    .then(data => {
        document.querySelector('#breweryDisplay').innerHTML = '';
        breweryApp.inputChecker(data);
        
    })
}



// For each loop that displays the data recieved from the api call
breweryApp.displayData = (results) => {
        
        results.forEach((result) => {
        
        const breweryName = document.createElement('h2');
        breweryName.innerText = result.name;
      
        const breweryContainer = document.createElement('li');
        breweryContainer.classList.add('breweryBox')

        breweryContainer.append(breweryName);

        document.querySelector('#breweryDisplay').append(breweryContainer);

    })
}


// Event Listener for drop down selection
breweryApp.getValues = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
            const city = document.querySelector("#city").value;
            const type = document.querySelector('#type').value;
            breweryApp.getBrewery(city, type);
    })
}


// Error handling 
breweryApp.inputChecker = (data) => {
    if (data.length === 0){
        const errorMessage = document.createElement('h2');
        errorMessage.innerText = ("Sorry there doesnt seem to be any results for that combination");
        document.querySelector('#breweryDisplay').append(errorMessage);   
    }
    
    else {
        breweryApp.displayData(data);
    }}


// App intilization
breweryApp.init = () => {
    breweryApp.getValues();
}

breweryApp.init();

