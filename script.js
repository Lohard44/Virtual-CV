document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const formMessage = document.getElementById('formMessage');

    if (name === '' || email === '') {
        formMessage.innerText = 'Please fill in both fields.';
        formMessage.style.color = 'red';
    } else if (!validateEmail(email)) {
        formMessage.innerText = 'Please enter a valid email address.';
        formMessage.style.color = 'red';
    } else {
        const message = `Thank you, ${name}! We will contact you at ${email}.`;
        formMessage.innerText = message;
        formMessage.style.color = 'green';
    }

    // Trigger the animation
    formMessage.style.animation = 'none';
    formMessage.offsetHeight; /* trigger reflow */
    formMessage.style.animation = null;
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.classList.remove('fade-out');
            } else {
                entry.target.classList.add('fade-out');
                entry.target.classList.remove('fade-in');
            }
        });
    }, {
        threshold: 0.1 // Adjust this value as needed
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});