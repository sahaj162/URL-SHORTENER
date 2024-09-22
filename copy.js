document.getElementById('copy').addEventListener('click', function() {
    const shortUrl = document.getElementById('shorturl');
    
    if (shortUrl.value === '') {
        alert('There is no shortened URL to copy!');
        return;
    }
    
    // Select the text field
    shortUrl.select();
    shortUrl.setSelectionRange(0, 99999); // For mobile devices
    
    // Copy the text inside the text field
    document.execCommand('copy');
    
    // Alert the copied text
    alert('Copied the URL: ' + shortUrl.value);
});
