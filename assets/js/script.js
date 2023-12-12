document.addEventListener("DOMContentLoaded", function () {
    const toggleMode = document.querySelector('.toggleMode');
    const toggleBtn = document.querySelector('#toggleModeBtn');
    const hamburger = document.querySelector('#hamburger');
    const menu = document.querySelector('#mainMenu');
    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const slider = document.getElementById('slideContainer');

    toggleBtn.addEventListener('click', function () {
        toggleMode.classList.toggle('dark');
    });

    hamburger.addEventListener('click', function () {
        line1.classList.toggle('rotate45');
        line2.classList.toggle('hidden')
        line3.classList.toggle('-rotate45');
        menu.classList.toggle('-right-96');
        menu.classList.toggle('hidden');
    });

    let currentIndex = 0;
    let intervelId;

    function showSlide(index) {
        const newPosition = -index * 100;
        slider.style.transform = `translateX(${newPosition}vw)`;
    };

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slider.children.length;
        showSlide(currentIndex);
    };

    function startAutoSlide() {
        intervelId = setInterval(function () {
            showNextSlide();
        }, 3000);
    };

    startAutoSlide();

});
