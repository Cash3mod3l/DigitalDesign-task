const categoryButton    = document.querySelector('#btn-category');
const modalCategory     = document.querySelector('#modal-category');
const goTop = document.querySelector(".go-top");

categoryButton.addEventListener('click', function () {
    modalCategory.style.display = 'grid';
    goTop.style.display = 'none';
});

modalCategory.onclick = function (event) {
    if (event.target.getAttribute('id') === 'modal-category') {
        modalCategory.style.display = 'none';
        goTop.style.display = 'block'
    }
};