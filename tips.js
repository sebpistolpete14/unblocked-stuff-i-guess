    // script.js
    const textOptions = [
        "boii ts so tuff",
        "my collar's blue but my neck is red",
        "i goon to js",
        "the enterity of hell vs one guy who wins",
        "put smth here gng",
        "Allan when are you gonna add the details",
        "uhh yeah this is cool right"
    ];

    function displayRandomText() {
        const randomIndex = Math.floor(Math.random() * textOptions.length);
        const selectedText = textOptions[randomIndex];
        document.getElementById('randomTextDisplay').innerHTML = selectedText;
    }

    // Call the function when the page loads
    window.onload = displayRandomText;
