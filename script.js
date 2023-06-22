fetch(`https://xkcd.com/${Math.floor(Math.random() * 2783) + 1}/info.0.json`)
    .then(response => response.json())
    .then(data => {
        // Create img element for the comic
        const img = document.createElement('img');
        img.src = data.img;
        img.alt = data.alt;

        // Append the img element to the comicContainer div
        const container = document.getElementById('comicContainer');
        container.appendChild(img);
    })
    .catch(error => {
        console.log('Error:', error);
    });