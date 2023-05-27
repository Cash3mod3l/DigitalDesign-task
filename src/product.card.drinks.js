const products = [
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2023-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2023-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2023-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2023-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2023-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2023-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2023-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2022-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2022-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2022-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2022-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2022-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2022-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2022-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2022-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2022-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2022-05-25'),
        buttonText : 'Купить',
    },
    {
        image      : '/img/kisspng-mineral-water-water-bottles-bottled-water-distille-water-body-5b421a0f2edf04.026767541531058703192.jpg',
        caption    : 'Товар 1',
        dateAdded  : new Date('2022-05-25'),
        buttonText : 'Купить',
    },
];

function getDayInfo(date) {
    const options = {
        weekday : 'long',
        week    : 'numeric',
        month   : 'long',
        year    : 'numeric',
    };
    return date.toLocaleDateString('ru-RU', options);
}

products.forEach(product => {
    const productBlock = document.querySelector('.product-block');

    const cardProduct = document.createElement('div');
    cardProduct.classList.add('cardProduct');

    const image = document.createElement('img');
    image.src   = product.image;
    image.classList.add('image');
    cardProduct.appendChild(image);

    const caption       = document.createElement('span');
    caption.textContent = product.caption;
    cardProduct.appendChild(caption);

    const dateAdded       = document.createElement('p');
    dateAdded.textContent = 'Дата добавления: ' + getDayInfo(product.dateAdded);
    cardProduct.appendChild(dateAdded);

    const buyButton       = document.createElement('button');
    buyButton.textContent = product.buttonText;
    buyButton.classList.add('btn-buy');
    cardProduct.appendChild(buyButton);

    productBlock.appendChild(cardProduct);
});