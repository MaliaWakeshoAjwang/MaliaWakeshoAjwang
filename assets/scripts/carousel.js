// get all carousel rows
const rows = document.querySelectorAll('.carousel-row');

rows.forEach(row => {
    row.addEventListener('mouseover', () => {
        //pause the animation on hover
        row.classList.add('paused');
    });

    row.addEventListener('mouseout', () => {
        //resume the animation on mouseout
        row.classList.remove('paused')
    });
});