// Handle series form submission
document.getElementById("seriesForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const seriesName = document.getElementById("seriesName").value;
    const authorName = document.getElementById("authorName").value;
    const artistName = document.getElementById("artistName").value;
    const seriesDescription = document.getElementById("seriesDescription").value;
    const coverImage = document.getElementById("coverImage").value;

    const newSeries = {
        id: seriesList.length + 1,
        name: seriesName,
        author: authorName,
        artist: artistName,
        description: seriesDescription,
        coverImage: coverImage,
        chapters: [],
        vipChapter: null
    };

    seriesList.push(newSeries);
    displaySeriesInAdmin();
});

// Handle chapter form submission
document.getElementById("chapterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const chapterNumber = document.getElementById("chapterNumber").value;
    const chapterLink = document.getElementById("chapterLink").value;
    const vipDuration = document.getElementById("vipDuration").value;

    const selectedSeries = document.getElementById("seriesSelect").value;
    const series = seriesList[selectedSeries - 1];

    series.chapters.push({ number: chapterNumber, link: chapterLink });

    if (vipDuration) {
        series.vipChapter = chapterNumber;
        setTimeout(() => {
            series.vipChapter = null; // Reset VIP chapter after duration
        }, vipDuration * 24 * 60 * 60 * 1000);
    }

    displayChaptersInAdmin(selectedSeries);
});

// Function to display series in admin panel
function displaySeriesInAdmin() {
    const seriesSelect = document.getElementById("seriesSelect");
    seriesSelect.innerHTML = '';
    seriesList.forEach((series, index) => {
        const option = document.createElement("option");
        option.value = index + 1;
        option.textContent = series.name;
        seriesSelect.appendChild(option);
    });
}

// Function to display chapters in admin panel
function displayChaptersInAdmin(selectedSeries) {
    const chapterList = document.getElementById("chapterList");
    chapterList.innerHTML = '';
    const series = seriesList[selectedSeries - 1];
    series.chapters.forEach(chapter => {
        const li = document.createElement("li");
        li.textContent = `Chapter ${chapter.number}: ${chapter.link}`;
        chapterList.appendChild(li);
    });
}

// Handle VIP user form submission
document.getElementById("vipUserForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const vipUsername = document.getElementById("vipUsername").value;

    vipUsers.push(vipUsername);
    displayVIPUsers();
});

// Function to display VIP users
function displayVIPUsers() {
    const vipUsersList = document.getElementById("vipUsersList");
    vipUsersList.innerHTML = '';
    vipUsers.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user;
        vipUsersList.appendChild(li);
    });
}

// Handle VIP chapter form submission
document.getElementById("vipChapterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedSeries = document.getElementById("vipSeriesSelect").value;
    const chapterNumber = document.getElementById("vipChapterNumber").value;
    const vipDays = document.getElementById("vipDays").value;

    const series = seriesList[selectedSeries - 1];
    series.vipChapter = chapterNumber;

    // Logic for setting the VIP chapter duration
    setTimeout(() => {
        series.vipChapter = null; // Reset VIP chapter after duration
    }, vipDays * 24 * 60 * 60 * 1000);
    displayVIPChapters();
});

// Function to display VIP chapters
function displayVIPChapters() {
    const vipChaptersList = document.getElementById("vipChaptersList");
    vipChaptersList.innerHTML = '';
    seriesList.forEach(series => {
        if (series.vipChapter) {
            const li = document.createElement("li");
            li.textContent = `${series.name} - Chapter ${series.vipChapter}`;
            vipChaptersList.appendChild(li);
        }
    });
}

// Initial load
displaySeriesInAdmin();
