document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

function toggleDetails(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contactModal');
    const btn = document.querySelector('.contact-button');
    const span = document.querySelector('.close-button');
    const form = document.getElementById('contactForm');

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    form.onsubmit = function(event) {
        event.preventDefault();

        const formData = new FormData(form);
       
        formData.append('name', document.getElementById('name').value);

        emailjs.sendForm('service_t1x83ii', 'template_4znf1nl', '#contactForm')
            .then(function(response) {
                alert('Message sent successfully!');
                modal.style.display = 'none';
                form.reset();
            }, function(error) {
                alert('Failed to send message. Please try again.');
            });
    }
});
