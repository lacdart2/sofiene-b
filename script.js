
document.addEventListener("DOMContentLoaded", function () {

    const scrollToSection = document.querySelector('a[href="#classes"]');
    scrollToSection.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector("#classes");
        targetSection.scrollIntoView({ behavior: "smooth" });
    });


    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.remove('opacity-0', 'translate-x-4');
            card.classList.add('opacity-100', 'translate-x-0');
        }, index * 400);
    });
});


function submitForm() {
    alert('شكرًا على رسالتك. سنقوم بالرد عليك في أقرب وقت!');
    return true;
}

function sanitizeInput(input) {
    return input.replace(/[^\w\s]/gi, '');
}
