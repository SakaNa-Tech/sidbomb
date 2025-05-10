
    // --- Sidebar Toggle for Mobile ---
    const menuToggle = document.getElementById('menuToggle');
    const navLinksContainer = document.getElementById('navLinksContainer');

    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    // --- Slider/Carousel Logic ---
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let activeIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'behind-1', 'behind-2');

            if (index === activeIndex) {
                slide.classList.add('active');
            } else if (index === (activeIndex + 1) % slides.length) {
                slide.classList.add('behind-1');
            } else if (index === (activeIndex + 2) % slides.length) {
                slide.classList.add('behind-2');
            }
        });
    }

    function goPrev() {
        activeIndex = (activeIndex === 0) ? slides.length - 1 : activeIndex - 1;
        updateSlides();
    }

    function goNext() {
        activeIndex = (activeIndex === slides.length - 1) ? 0 : activeIndex + 1;
        updateSlides();
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', goPrev);
        nextButton.addEventListener('click', goNext);
    }

    updateSlides();