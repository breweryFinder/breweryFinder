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
        breweryApp.displayData(data);
    })
}



// For each loop that displays the data recieved from the api call
breweryApp.displayData = (results) => {
        
        results.forEach((result) => {
        
        const breweryName = document.createElement('h2');
        breweryName.innerText = result.name;
      

        const breweryCity = document.createElement('h4');
        breweryCity.innerText = result.city;
    
        
        const breweryType = document.createElement('h3');
        breweryType.innerText = result.brewery_type;

        
        const breweryContainer = document.createElement('li');
        breweryContainer.classList.add('breweryBox')

        breweryContainer.append(breweryName, breweryType, breweryCity);

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


// App intilization
breweryApp.init = () => {
    breweryApp.getValues();
}

breweryApp.init();

