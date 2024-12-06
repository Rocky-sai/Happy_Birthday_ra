// Play background music automatically on page load
window.onload = () => {
    const bgMusic = new Audio('assets/audio/background.mp3');
    bgMusic.loop = true;
    bgMusic.play();
}

// Open the book when clicked on the book cover
function openBook() {
    document.getElementById('book').classList.add('open');
    document.getElementById('celebrationPopup').style.display = 'block';

    // Show the celebration popup after 1 second
    setTimeout(() => {
        document.getElementById('celebrationPopup').style.display = 'none';
    }, 3000);
}

// Cycling through pages when clicked
let currentPage = 0;
const pages = document.querySelectorAll('.page');

function nextPage(pageIndex) {
    // Hide current page
    pages[currentPage].style.opacity = 0;

    // Update to the next page
    currentPage = pageIndex % pages.length;

    // Show the next page
    pages[currentPage].style.opacity = 1;
}
