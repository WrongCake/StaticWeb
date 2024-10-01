document.getElementById('addSeriesForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const title = document.getElementById('title').value;
    const chapter = document.getElementById('chapter').value;
    const image = document.getElementById('image').value;
    const seriesPageLink = document.getElementById('seriesPageLink').value;

    // Add new series to the series data
    let seriesData = JSON.parse(localStorage.getItem('seriesData')) || [];
    seriesData.push({ title, chapter, image, seriesPageLink });
    localStorage.setItem('seriesData', JSON.stringify(seriesData));

    // Display the new series immediately on the homepage
    displaySeries();
});

function displaySeries() {
    let seriesData = JSON.parse(localStorage.getItem('seriesData')) || [];
    const seriesContainer = document.getElementById('seriesContainer');
    seriesContainer.innerHTML = ''; // Clear previous content

    seriesData.forEach(series => {
        const seriesElement = document.createElement('div');
        seriesElement.className = 'series-card';
        seriesElement.innerHTML = `
            <img src="${series.image}" alt="${series.title} Cover">
            <h3>${series.title}</h3>
            <p><a href="${series.seriesPageLink}">${series.chapter}</a></p>
        `;
        seriesContainer.appendChild(seriesElement);
    });
}

// Display series on page load
document.addEventListener('DOMContentLoaded', displaySeries);
