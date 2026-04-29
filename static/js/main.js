// static/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial State
    const body = document.body;
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const titleElement = document.getElementById('splitting-title');

    // Prevent scrolling while loading
    body.classList.add('is-loading');

    // 2. Simple loading animation (no character splitting in loader)
    // The loader just shows the text with the countdown message
    // Animation will happen in the main content instead

    // 3. The Fade-out Timing
    const LOADING_DURATION = 2500; // Total time loader is visible in ms

    setTimeout(() => {
        // Start the fade-out animations
        loader.classList.add('fade-out');

        // Show the main content smoothly
        if (mainContent) {
            mainContent.style.opacity = '1';
        }

        // After loader is faded out, set up the character animation for the main page title
        setTimeout(() => {
            loader.style.display = 'none';
            body.classList.remove('is-loading');

            // NOW split the title for the main page animation
            setupMainPageTitleAnimation();
        }, 800);

    }, LOADING_DURATION);

    // 4. Function to setup the main page title animation
    function setupMainPageTitleAnimation() {
        // Get the animated company name in the main content
        const mainTitle = document.querySelector('.animated-company-name');

        if (mainTitle) {
            const text = mainTitle.textContent;
            mainTitle.textContent = '';

            // Loop through each character and wrap it in a span with an ordered index
            [...text].forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char;
                // Use the CSS variable `--order` for the staggered animation
                span.style.setProperty('--order', index);
                mainTitle.appendChild(span);
            });

            // The animation will automatically trigger via CSS
        }
    }
});
