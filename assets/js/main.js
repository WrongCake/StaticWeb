// Series data will be updated by admin uploads
let seriesData = []; // This will be shared between the admin and homepage

// Function to display the series on homepage
function displaySeries() {
    const seriesGrid = document.getElementById('seriesGrid'); // Make sure this element exists on the homepage
    seriesGrid.innerHTML = '';  // Clear any existing series

    seriesData.forEach(series => {
        const seriesCard = document.createElement('div');
        seriesCard.className = 'series-card';

        seriesCard.innerHTML = `
            <img src="${series.image}" alt="${series.title}">
            <div class="series-info">
                <h3>${series.title}</h3>
                <a href="${series.seriesPageLink}">${series.chapter}</a>
            </div>
        `;

        seriesGrid.appendChild(seriesCard);
    });
}

// Simulate initial series load (You could fetch this data from a backend)
displaySeries();
