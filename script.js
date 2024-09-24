// selecting all fiterable cards and filter cards 
const filterButtons = document.querySelectorAll('.filter_buttons button')
const filterableCards = document.querySelectorAll('.filterable_cards .card')


// defining the filterCards function
const filterCards = e => {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    console.log(e.target);

// Iterate over each filterable card
filterableCards.forEach(card => {
    // add 'hide' class to hide the card identity
    card.classList.add('hide');

    // check if the card matches the selected filter or 'all' is selected

    if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === 'all') {
        card.classList.remove('hide');
    }
})
};

// adding click event listner to each filter button
filterButtons.forEach(button => button.addEventListener('click', filterCards));