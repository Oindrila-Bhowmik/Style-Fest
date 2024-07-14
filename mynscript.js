// Toggle like button
function toggleLike(button) {
    button.classList.toggle('liked');
    const icon = button.querySelector('i');
    if (button.classList.contains('liked')) {
        icon.classList.remove('fa-heart');
        icon.classList.add('fa-heart');
        icon.style.color = 'red';
    } else {
        icon.classList.remove('fa-heart');
        icon.classList.add('fa-heart');
        icon.style.color = 'white';
    }
}

// Vote function
function vote(button) {
    const parentCard = button.closest('.rate-card');
    const title = parentCard.querySelector('.rate-info h3').innerText;
    alert(`You voted for: ${title}`);
}

// Handle form submission
function handleFormSubmission(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formType = form.querySelector('button[type="submit"]').innerText;

    // Log form data for demonstration purposes
    for (const pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    alert(`Form submitted: ${formType}`);
}

// Attach form submission event listeners
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmission);
    });
});

// Navbar toggle for small screens
const navLeft = document.querySelector('.nav-left i');
const navMenu = document.querySelector('.nav-left ul');

navLeft.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
