const btnTheme = document.querySelector(".btn-switch-theme");
const head = document.querySelector(".block-nav");

btnTheme.onclick = function () {
    document.body.classList.toggle('dark-theme');
    head.classList.toggle('block-nav-dark-theme');
}