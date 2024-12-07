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

function nextPage() {
    // Flip the current page out
    pages[currentPage].classList.remove('flip-in');
    pages[currentPage].classList.add('flip-out');

    // Update to the next page
    currentPage = (currentPage + 1) % pages.length;

    // Flip the new page in
    pages[currentPage].classList.remove('flip-out');
    pages[currentPage].classList.add('flip-in');
}

// Initialize pages visibility and flip-in effect
document.querySelector('.page-1').classList.add('flip-in');
document.querySelector('.page-2').classList.add('flip-out');
document.querySelector('.page-3').classList.add('flip-out');

// Add event listener for page transitions
document.querySelector('.book').addEventListener('click', nextPage);
