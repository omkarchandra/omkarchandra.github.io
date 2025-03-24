
document.addEventListener('DOMContentLoaded', () => {
    const gear1 = document.getElementById('gear1');
    const gear2 = document.getElementById('gear2');
    const rotateButton = document.getElementById('rotate');

    let isRotating = false;

    rotateButton.addEventListener('click', () => {
        if (isRotating) {
            gear1.classList.remove('rotate');
            gear2.classList.remove('rotate');
            isRotating = false;
        } else {
            gear1.classList.add('rotate');
            gear2.classList.add('rotate');
            isRotating = true;
        }
    });
});