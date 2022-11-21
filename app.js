// Namespace
const breweryApp = {};


// API Call
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
        document.querySelector('#breweryDisplay').innerHTML = '';
        breweryApp.inputChecker(data);
        
    })
}



// Function to display Breweries
breweryApp.displayData = (results) => {
        
        results.forEach((result) => {
        
        const breweryName = document.createElement('p');
        breweryName.innerText = result.name;
        
        const breweryWebsite = document.createElement('a');
        breweryWebsite.setAttribute('href', result.website_url)
        breweryWebsite.innerText = `Go to website!`;
      
        const breweryContainer = document.createElement('li');
        breweryContainer.classList.add('breweryBox')

        breweryContainer.append(breweryName, breweryWebsite, breweryWebsite);

        document.querySelector('#breweryDisplay').append(breweryContainer);

    })
}



// Event Listener for drop down selection
breweryApp.getValues = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
            const city = document.querySelector("#city").value;
            const type = document.querySelector('#type').value;
            breweryApp.getAPI(city, type);
    })
}


// Error handling 
breweryApp.inputChecker = (data) => {
    if (data.length === 0){
        document.querySelector('#errorMessageBox').innerHTML = '';
        
        const errorMessage = document.createElement('h2');
        errorMessage.innerText = ("Sorry there doesnt seem to be any results for that combination");
        errorMessage.classList.add('errorMessageText');

        document.querySelector('#errorMessageBox').append(errorMessage);
    }
    
    else {
        
        document.querySelector('#errorMessageBox').innerHTML = '';
        breweryApp.displayData(data);
    }}



// App intilization
breweryApp.init = () => {
    breweryApp.getValues();
}

breweryApp.init();

