var openIcon = document.getElementById('open-icon');
var closeIcon = document.getElementById('close-icon');

openIcon.addEventListener('click', function () {
    openIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    closeIcon.classList.add('fade-in');
});

closeIcon.addEventListener('click', function () {
    closeIcon.style.display = 'none';
    openIcon.style.display = 'block';
    openIcon.classList.add('fade-in');
});
