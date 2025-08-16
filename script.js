function filterProjects(category) {
    const cards = document.querySelectorAll('.gallery .card');
    const buttons = document.querySelectorAll('.filter-btn');

    // update button active state
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category.includes(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
