document.addEventListener("DOMContentLoaded", function () {
  const entryContainer = document.getElementById("entryContainer");

  displayResult()
    .then((entries) => {
      console.log("Fetched entries:", entries);
      displayEntries(entries);
    })
    .catch((error) => {
      console.error("Error fetching URLhaus data:", error);
    });

  function displayResult() {
    const proxyUrl = "https://api.allorigins.win/get?url=";
    const endpoint = `${proxyUrl}https://urlhaus-api.abuse.ch/v1/urls/recent/`;

    return fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const parsedData = JSON.parse(data.contents);
        return parsedData.urls;
      });
  }

  function displayEntries(entries) {
    entries.forEach((entry) => {
      const card = createEntryCard(entry);
      entryContainer.appendChild(card);
    });
  }
  function createEntryCard(entry) {
    const card = document.createElement("div");
    card.classList.add("card", "col-md-6", "mx-auto", "mb-3");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = entry.url;

    const date = document.createElement("p");
    date.classList.add("card-text");
    date.textContent = `Date added: ${entry.date_added}`;

    let tags = document.createElement("p");
    tags.classList.add("card-text");
    if (entry.tags && Array.isArray(entry.tags)) {
      tags.textContent = `Tags: ${entry.tags.join(", ")}`;
    } else {
      tags.textContent = "No tags available";
    }

    cardBody.appendChild(title);
    cardBody.appendChild(date);
    cardBody.appendChild(tags);
    card.appendChild(cardBody);

    return card;
  }
});
