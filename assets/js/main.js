// Simple search logic
document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const seriesCards = document.querySelectorAll('.series-card');

    seriesCards.forEach(card => {
        const seriesTitle = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = seriesTitle.includes(query) ? '' : 'none';
    });
});

