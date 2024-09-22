// Array of random jokes/quotes
const jokes = [
    "Why don`t skeletons fight each other? They don`t have the guts!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I`m reading a book on anti-gravity. It`s impossible to put down!",
    "Why don`t some couples go to the gym? Because some relationships don`t work out.",
    "What do you call fake spaghetti? An impasta!"
];

// DOM elements
const quoteDisplay = document.getElementById('quote-display');
const refreshBtn = document.getElementById('refresh-btn');
const themeToggle = document.getElementById('theme-toggle');

// Track whether it's the first click
let firstClick = true;

// Function to get a random joke
function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// Event listener for the refresh button
refreshBtn.addEventListener('click', () => {
    if (firstClick) {
        // After the first click, change the button to "Another"
        refreshBtn.textContent = "Another";
        firstClick = false;
    }
    
    // Display a random joke
    quoteDisplay.textContent = getRandomJoke();
});

// Event listener for theme toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = document.body.classList.contains('dark-theme') ? "🌙" : "🌞";
});
