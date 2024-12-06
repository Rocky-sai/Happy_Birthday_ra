// Play the background music when the page loads
const bgMusic = new Audio('assets/audio/background.mp3');
bgMusic.loop = true; // Loop the background music
bgMusic.play();

// Track taps to play the "Happy Birthday" tune with different notes
const notes = [
  'assets/audio/note1.mp3',
  'assets/audio/note2.mp3',
  'assets/audio/note3.mp3',
  'assets/audio/note4.mp3',
  'assets/audio/note5.mp3',
  'assets/audio/note6.mp3',
];

let noteIndex = 0;

// Function to play "Happy Birthday" song notes
function playNote() {
  const note = new Audio(notes[noteIndex]);
  note.play();
  noteIndex = (noteIndex + 1) % notes.length;
}

// Open the book on click
function openBook() {
    const book = document.getElementById('book');
    book.classList.add('open');
    setTimeout(() => {
        document.getElementById('celebrationPopup').style.display = 'block';
        setTimeout(() => {
            document.getElementById('celebrationPopup').style.display = 'none';
        }, 3000);
    }, 2000);
}

// Next page of the book
function nextPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
        page.style.opacity = (index + 1 === pageNumber) ? 1 : 0;
    });
}

// Optional function for other interactive elements
function showMessage(message) {
    alert(message); // Popup to show messages, e.g., "Have a great year!"
}

