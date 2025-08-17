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
function openVideoModal(videoUrl, title, description, codeLink) {
    document.getElementById("projectModal").style.display = "block";
    document.getElementById("modalBody").innerHTML = `
        <h2 style="color:white;">${title}</h2>
        <iframe width="100%" height="400" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
        <p style="color:white; text-align:center; margin-top:10px;">${description}</p>
    `;

    let linksHtml = "";
    if(codeLink) {
        linksHtml += `<a href="${codeLink}" target="_blank" class="code">💻 View Code</a>`;
    }
    document.getElementById("modalLinks").innerHTML = linksHtml;
}
function closeModal() {
    document.getElementById("projectModal").style.display = "none";
    document.getElementById("modalBody").innerHTML = "";
    document.getElementById("modalLinks").innerHTML = "";
}