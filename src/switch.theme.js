const btnTheme = document.querySelector(".btn-switch-theme");
const body = document.body;

btnTheme.onclick = function () {
    body.classList.toggle('dark-theme');
}