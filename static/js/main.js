// static/js/main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial State
    const body = document.body;
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const titleElement = document.getElementById('splitting-title');

    // Prevent scrolling while loading
    body.classList.add('is-loading');

    // 2. The Letter Splitting Logic
    // Grab the full company name string
    const text = titleElement.textContent;
    // Clear the existing text
    titleElement.textContent = '';

    // Loop through each character and wrap it in a span with an ordered index
    [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        // Use the CSS variable `--order` we defined in CSS
        span.style.setProperty('--order', index);
        titleElement.appendChild(span);
    });

    // 3. The Fade-out Timing
    const LOADING_DURATION = 2500; // Total time loader is visible in ms

    setTimeout(() => {
        // Start the fade-out animations
        loader.classList.add('fade-out');

        // Show the main content smoothly
        if (mainContent) {
            mainContent.style.opacity = '1';
        }

        // 4. Cleanup after animations complete (800ms fade transition)
        setTimeout(() => {
            loader.style.display = 'none';
            body.classList.remove('is-loading');
        }, 800);

    }, LOADING_DURATION);
});
