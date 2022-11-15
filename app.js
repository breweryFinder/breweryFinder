// Step 1a:

// Fetching multiple Brewery APIs at once:
// const urls = ['https://api.openbrewerydb.org/breweries?by_state?=new_york&per_page=3', 'https://api.openbrewerydb.org/breweries?by_type']

// Create namespace
const breweryApp = {};

// State and Type are separate functions
// By State 
breweryApp.getState = (query) => {
    
    const stateUrl = new URL('https://api.openbrewerydb.org/breweries?by_state');
    stateUrl.search = new URLSearchParams({
        brewery_type: breweryApp.userType,
        state: breweryApp.userState
        
    })
    fetch(stateUrl)
    .then(res => {
    return res.json();
    })
    .then(data => {
        console.log('State Data', data);
    })
}
breweryApp.getState();



// Step 1b:
// Create variables that target each item/value we need (state, brewery type, randomizer for stretch goal)
// Take first 3 breweries listed for results

// Step 1d:
// Create init

breweryApp.init = () => {
//  breweryApp.getState();
}

breweryApp.init();

//Step 2a:
// Target the form and pop it into a variable in order to add eventListener
// Step 2b:
//Add eventListener to access user’s input/choices from TWO drop down menus
// event.preventDefault()
// Step 2c:
// Target the individual inputs
// Store user choices in 2 variables:
// 1. Which State do you want to visit ?
// 2. What type of brewery do you want to visit?
// Step 3:
// With user’s selection in the form of a string, use it to target the appropriate API array/values
// Step 4a:
// Loop through said API array/values and ALSO use a conditional/if statement to compare the USER's chosen State against their Brewery Choice in the array.
// Step 4b:
// Create an empty array that will hold all options/products based on user’s selections
// Step 5a:
// Take new array of options/products
// Step 5b:
// Create a randomizer function for our products array

// Phase 2:
// That content is then displayed to the page
// Create variable to clear user input after submission

// !!! ART CODEALONG !!!

    // create our namespace object 
    // const artApp = {};
    
    // variable to store API key
    // artApp.key = "uCtx1pe0";

    // make a call tot he API
    // artApp.getArt = (query) => {
    //     // what we need for our fetch request:
    //         // url endpoint (new URL)
    //         const url = new URL('https://www.rijksmuseum.nl/api/en/collection');
    //         // search parameters
    //         url.search = new URLSearchParams({
    //             key: artApp.key,
    //             imgonly: true,
    //             q: query
    //         })
    //         // fetch()
    //         fetch(url)
    //         // .then() x2
    //         // .json()
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             // console.log(data.artObjects)
    //             // called in here because otherwise if it's global it will display nothing! only display WHEN the art is retrieved
    //             document.querySelector('#artwork').innerHTML = '';
    //             artApp.displayArt(data.artObjects);
    //         })
    // }

    // make a function to display our art on the page
    // artApp.displayArt = (artPieces) => {
    //     console.log(artPieces)
        // for each item in the array of objects (artPieces), we will create some hTML and append it to the page
        // artPieces.forEach(piece => {
            // piece is the individual object in the artPieces array
            // console.log(piece)
            // <li>
            // <h2>Title</h2>
            // <p>Artist Name</p>
            // <img src=url alt=alt>
            //</li>
            // const titleHeader = document.createElement('h2');
            // add the art piece name
            // titleHeader.innerText = piece.title;
            // console.log(titleHeader)

            // create a paragraph
            // const artistName = document.createElement('p')
            // add the artist's name
            // artistName.innerText = piece.principalOrFirstMaker;

            // create image element
            // const artImage = document.createElement('img');
            // console.log(artImage)
            // artImage.src = piece.webImage.url;
            // artImage.alt = piece.title;

            // const artContainer = document.createElement('li');
            // artContainer.classList.add('piece')
            
            // adding the h2 to the li
            //appendCHILD way:
            // artContainer.appendChild(titleHeader)
            // artContainer.appendChild(artistName)
            // artContainer.appendChild(artImage)
            
            // append way:
            // artContainer.append(titleHeader, artistName, artImage);

            // append the li to the ul using append (could also use appendChild)
            // document.querySelector('#artwork').append(artContainer)
        // })
        // we will need a query selector
    // }

    // *******************************************************************************
    // this is the function that will get the user's input
    // artApp.getUserInput = () => {
    //     // listen for when the user makes a change in the drop down
    //     // get the value of the selected option
    //     document.querySelector('#animal').addEventListener('change', function(){
    //         console.log(this.value)
    //         const selection = this.value;;
    //         artApp.getArt(selection);
    //     })
    // }    ***************************************************************************

    // create our init method
    // will store our code/functions that need to run on page load
    // artApp.init = () => {
    //     // called function as declared above
    //     // artApp.getArt();
    //     artApp.getUserInput();
    // }

    // calling init
    // artApp.init();


    // // ASYNC VERSION

    // artApp.getArt = async function(query)  {
    //     // what we need for our fetch request:
    //     // url endpoint (new URL)
    //     const url = new URL('https://www.rijksmuseum.nl/api/en/collection');

    //     // search parameters
    //     url.search = new URLSearchParams({
    //         key: artApp.key,
    //         imgonly: true,
    //         q: query
    //     })

    //     // fetch()
    //     const result = await fetch(url)
    //     const art = await result.json()
    //     document.querySelector('#artwork').innerHTML = '';
    //     artApp.displayArt(art.artObjects)

    // }

    // blayh blah