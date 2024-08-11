function Metropolitan() {
    return new Promise((resolve, reject) => {
        const apiUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

function ResultDisplay(data) {
    const Hello = document.getElementById('artworks-container');
    data.objectIDs.slice(0, 10).forEach(objectID => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col-md-4', 'card');

        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(objectData => {
                const imgElement = document.createElement('img');
                imgElement.src = objectData.primaryImageSmall;
                imgElement.alt = objectData.title;

                const titleElement = document.createElement('p');
                titleElement.textContent = objectData.title;

                cardDiv.appendChild(imgElement);
                cardDiv.appendChild(titleElement);
                Hello.appendChild(cardDiv);
            })
            .catch(error => console.error('Error fetching artwork details:', error));
    });
}
document.addEventListener('DOMContentLoaded', () => {
    Metropolitan()
        .then(data => ResultDisplay(data))
        .catch(error => console.error('Error fetching data:', error));
});
