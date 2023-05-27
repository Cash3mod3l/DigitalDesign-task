const count       = document.querySelector('#count');
const commentText = document.querySelector('.comment-text');

commentText.oninput = function () {
    const maxLengtn = 2000;
    let text        = commentText.value;

    if (text.length > maxLengtn) {
        text = text.slice(0, maxLengtn);
    }

    commentText.value = text;
    count.textContent = commentText.value.length + '/2000';
};

function Form() {
    const modalBuy = document.querySelector('#modal-buy');
    const goTop    = document.querySelector('.go-top');

    modalBuy.style.display = 'grid';
    goTop.style.display    = 'none';
}

function Buy() {
    let num          = document.querySelector('.num');
    const radioInput = document.querySelectorAll('.radio-input');

    if (num.value !== '0' && num.value !== '' && radioInput.checked !== false) {
        alert('Покупка совершена!');
    } else {
        alert('Заполните все поля!');
    }
}

function Close() {
    const modalBuy = document.querySelector('#modal-buy');
    const goTop    = document.querySelector('.go-top');

    modalBuy.style.display = 'none';
    goTop.style.display    = 'block';
}

document.addEventListener('click', function (event) {
    if (event.target.getAttribute('class') === 'btn-buy') {
        Form();
    }
    if (event.target.getAttribute('class') === 'btn-close') {
        Close();
    }
    if (event.target.getAttribute('class') === 'btn-buy-form') {
        Buy();
    }
});
