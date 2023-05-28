const categoryContainer = document.createElement('div');
categoryContainer.classList.add('categoryContainer');

const categories = [
    {href : 'meat.html', name : 'Мясо'},
    {href : 'drinks.html', name : 'Напитки'},
    {href : 'grocery.html', name : 'Бакалея'},
    {href : 'snacks.html', name : 'Снэки'},
];

categories.forEach(category => {
    const categoryLink = document.createElement('a');
    categoryLink.href  = category.href;

    const categoryItem = document.createElement('div');
    categoryItem.classList.add('categoryItem');
    categoryItem.textContent = category.name;

    categoryLink.appendChild(categoryItem);
    categoryContainer.appendChild(categoryLink);
});

const modalCategory = document.querySelector('#modal-category');
modalCategory.appendChild(categoryContainer);

const categoryButton = document.querySelector('#btn-category');
const goTop          = document.querySelector('.go-top');

categoryButton.addEventListener('click', function () {
    modalCategory.style.display = 'grid';
    goTop.style.display         = 'none';
});

modalCategory.onclick = function (event) {
    if (event.target.getAttribute('id') === 'modal-category') {
        modalCategory.style.display = 'none';
        goTop.style.display         = 'block';
    }
};