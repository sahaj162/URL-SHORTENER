let btn = document.getElementById("shorten"); // Select the shorten button

btn.addEventListener("click", short); // Call the short function on button click

// Function to shorten URL
async function short() {
    let longURL = document.getElementById("longurl").value; // Get the long URL from the input field
    let shortURL = document.getElementById("shorturl"); // Select the short URL input field

    try {
        // Fetch the shortened URL from the TinyURL API
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longURL)}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.text(); // TinyURL returns the short URL as plain text

        // Set the short URL value
        shortURL.value = data;
    } catch (error) {
        console.error("Error shortening the URL:", error); // Log any errors to the console
        shortURL.value = 'Error shortening URL'; // Set error message in the short URL field
    }
}
