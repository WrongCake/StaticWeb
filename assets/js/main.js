// Simulated data from an admin upload
const seriesData = [
    {
        title: "Series Title 1",
        chapter: "Chapter 10: New Horizons",
        image: "assets/images/series1.jpg",
        seriesPageLink: "series-page.html"
    },
    {
        title: "Series Title 2",
        chapter: "Chapter 12: The Dark Return",
        image: "assets/images/series2.jpg",
        seriesPageLink: "series-page.html"
    }
];

// Function to display the series on homepage
function displaySeries() {
    const seriesGrid = document.getElementById('seriesGrid');
    seriesGrid.innerHTML = '';  // Clear any existing content

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

// Call the function to display the series after admin upload
displaySeries();

// Simple search logic
document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const seriesCards = document.querySelectorAll('.series-card');

    seriesCards.forEach(card => {
        const seriesTitle = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = seriesTitle.includes(query) ? '' : 'none';
    });
});
