// Array to hold series data (normally this would come from a backend/database)
let seriesData = [];

// Handle the form submission to add a new series
document.getElementById('addSeriesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const title = document.getElementById('title').value;
    const chapter = document.getElementById('chapter').value;
    const image = document.getElementById('image').value;
    const seriesPageLink = document.getElementById('seriesPageLink').value;

    // Add new series to the seriesData array
    seriesData.push({ title, chapter, image, seriesPageLink });

    // Save the new series data (You'd typically send this data to your server/backend)
    console.log('Series Added:', { title, chapter, image, seriesPageLink });

    // Reset the form
    document.getElementById('addSeriesForm').reset();

    // Call the function to display the new series on the homepage
    displaySeries();
});

// Simulate displaying the newly added series (This should be on your homepage JS)
function displaySeries() {
    const seriesGrid = document.getElementById('seriesGrid'); // Assuming seriesGrid is on your homepage
    seriesGrid.innerHTML = '';  // Clear the existing series

    // Loop over the series data and create the HTML for each series
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
