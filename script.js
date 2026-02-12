const button = document.getElementById('myButton');

button.addEventListener('click', () => {
    // 1. Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // 2. Change the background
    document.body.style.backgroundColor = randomColor;
    
    // 3. Update the button text
    button.textContent = "Wow! You changed the internet!";
});