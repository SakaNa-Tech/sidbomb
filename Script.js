
 
const menuToggle = document.getElementById('menuToggle');
    const navLinksContainer = document.getElementById('navLinksContainer');

    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });
