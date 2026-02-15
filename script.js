document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

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

// Intersection Observer for section animations
const sections = document.querySelectorAll('.section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => sectionObserver.observe(section));

// Modal functionality
function viewProjectPhotos(projectId) {
    const modal = document.getElementById('photoModal');
    const container = modal.querySelector('.photo-container');
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('active'), 10);

    // Load project photos based on projectId
    const photos = getProjectPhotos(projectId);
    container.innerHTML = photos.map(photo => 
        `<img src="${photo}" alt="Project Photo" style="width: 100%; margin-bottom: 10px;">`
    ).join('');
}

function viewProjectVideo(projectId) {
    const modal = document.getElementById('videoModal');
    const container = modal.querySelector('.video-container');
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('active'), 10);

    // Load project video based on projectId
    const videoSrc = getProjectVideo(projectId);
    container.innerHTML = `<video controls style="width: 100%;"><source src="${videoSrc}" type="video/mp4"></video>`;
}

// Helper functions to get project media
function getProjectPhotos(projectId) {
    // Replace with actual project photo paths
    return [`project_images/${projectId}.jpg`];
}

function getProjectVideo(projectId) {
    // Replace with actual project video path
    return `Project_videos/${projectId}.mp4`;
}

// Close modal functionality
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal');
        modal.classList.remove('active');
        setTimeout(() => {
            modal.style.display = 'none';
            // Clear container content
            modal.querySelector('.photo-container, .video-container').innerHTML = '';
        }, 300);
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Add scroll class to nav
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Trigger initial section visibility check
    sections.forEach(section => sectionObserver.observe(section));
});
