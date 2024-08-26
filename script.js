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
    // Inicializa o EmailJS com o seu User ID
    emailjs.init("1moWNrDbfN-K4Gjjj"); // Substitua pelo seu User ID do EmailJS

    // Modal handling
    const modal = document.getElementById('contactModal');
    const btn = document.querySelector('.contact-button');
    const span = document.querySelector('.close-button');
    const modalForm = document.getElementById('contactForm');

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

    modalForm.onsubmit = function(event) {
        event.preventDefault();

        emailjs.sendForm('service_t1x83ii', 'template_4znf1nl', modalForm)
            .then(function(response) {
                alert('Mensagem enviada com sucesso!');
                modal.style.display = 'none';
                modalForm.reset();
            }, function(error) {
                alert('Falha ao enviar mensagem. Por favor, tente novamente.');
            });
    }

});
