URL Shortener Project Summary:
This URL shortener project uses the TinyURL API to convert long URLs into short, easily shareable links. The API requires a simple GET request to shorten URLs without needing an API key or authentication.

JavaScript Implementation:

A user inputs a long URL into a text field.
Upon clicking the "Shorten" button, the fetch function sends the long URL to the TinyURL API.
The API responds with a short URL in plain text, which is then displayed to the user in the designated field.
Error handling is implemented to manage failed requests and notify the user of any issues during the shortening process.
