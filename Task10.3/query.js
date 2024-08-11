document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('imageContainer');
    
    DisplayResult().then(imageUrl => {
        const imgElement = document.createElement('img');
        imgElement.classList.add('col-md-4', 'my-3', 'img-fluid');
        imgElement.setAttribute('src', imageUrl);
        imageContainer.appendChild(imgElement);
    }).catch(error => {
        console.error('Error fetching image:', error);
    });
    function DisplayResult() {
        return new Promise((resolve, reject) => {
            const endpoint = 'https://api.waifu.pics/sfw/waifu'; 
            fetch(endpoint)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const imageUrl = data.url; 
                    resolve(imageUrl);
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
});
