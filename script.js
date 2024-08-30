document.addEventListener("DOMContentLoaded", function () {
    const scrollToSection = document.querySelector('a[href="#classes"]');

    scrollToSection.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default anchor click behavior

        const targetSection = document.querySelector("#classes");
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

function submitForm() {
    alert('شكرًا على رسالتك. سنقوم بالرد عليك في أقرب وقت!');
    return true; // Allow the form to be submitted
}

function sanitizeInput(input) {
    return input.replace(/[^\w\s]/gi, '');
}
