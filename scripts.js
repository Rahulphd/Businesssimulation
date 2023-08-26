
document.addEventListener('DOMContentLoaded', function() {
    // Nominal Scale Interaction
    const fruitButtons = document.querySelectorAll('.fruit-button');
    const nominalMessage = document.getElementById('nominal-message');

    fruitButtons.forEach(button => {
        button.addEventListener('click', function() {
            nominalMessage.textContent = `You selected the ${this.textContent}. Remember, there's no order or ranking between fruits in a nominal scale.`;
        });
    });

    // Ordinal Scale Interaction
    const movieList = document.getElementById('movie-list');
    const ordinalMessage = document.getElementById('ordinal-message');
    let draggedItem = null;

    movieList.addEventListener('dragstart', function(e) {
        draggedItem = e.target;
        setTimeout(function() {
            draggedItem.style.display = 'none';
        }, 0);
    });

    movieList.addEventListener('dragend', function(e) {
        setTimeout(function() {
            draggedItem.style.display = '';
            draggedItem = null;
        }, 0);
    });

    movieList.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    movieList.addEventListener('dragenter', function(e) {
        e.preventDefault();
    });

    movieList.addEventListener('drop', function(e) {
        this.insertBefore(draggedItem, e.target);
        ordinalMessage.textContent = `You ranked the movies as: ${Array.from(this.children).map(item => item.textContent).join(', ')}.`;
    });
});
