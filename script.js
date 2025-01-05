 // Pointer effect functionality
    // Create the pointer effect element dynamically
    const pointerEffect = document.createElement('div');
    pointerEffect.classList.add('pointer-effect');
    document.body.appendChild(pointerEffect);

    // Update the position and activate the pointer effect on mousemove
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.pageX;
        const mouseY = e.pageY;

        // Position the pointer effect at the mouse location
        pointerEffect.style.left = `${mouseX}px`;
        pointerEffect.style.top = `${mouseY}px`;

        // Add the active class to trigger the animation
        pointerEffect.classList.add('active');

        // Remove the 'active' class after the animation ends
        pointerEffect.addEventListener('transitionend', () => {
            pointerEffect.classList.remove('active');
        });
    });