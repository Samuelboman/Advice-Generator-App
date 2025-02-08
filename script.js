// Selecting elements from the DOM using queryselector
const adviceId = document.querySelector ('#adviceId'); //Element where the advice ID will be displayed
const adviceText = document.querySelector ('#adviceText');  // Element where the advice text will be displayed
const btn = document.querySelector('#btn'); // Button to fetch new advice

// Function to fetch advice from the API
function getAdvice() {
    fetch('https://api.adviceslip.com/advice') // Fetching data from the advice API
     .then(response => {
        return response.json(); //converting response to JSON format
    }).then(adviceData => {
        const adviceIdd = adviceData.slip.id; // Extracting advice ID
        const advice = adviceData.slip.advice; // Extracting advice text

        // Updating the UI with fetched advice
        adviceId.textContent = adviceIdd;
        adviceText.innerHTML = `<p>${advice}</p>`;
    }).catch(error => {
        console.log(error); // Logging my errors to the console
    })
}

// Event listener for button click to fetch me advice
btn.addEventListener('click', () => {
    getAdvice();
});

// Fetch advice when the page loads
window.onload = () => {
    getAdvice();
}