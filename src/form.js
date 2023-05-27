const count       = document.querySelector('#count');
const commentText = document.querySelector('.comment-text');
const maxLengtn   = 2000;

commentText.oninput = function () {

    let text = commentText.value;

    if (text.length > maxLengtn) {
        text = text.slice(0, maxLengtn);
    }

    commentText.value = text;
    count.textContent = commentText.value.length + '/2000';
};

function openForm() {
    const modalBuy = document.querySelector('#modal-buy');
    const goTop    = document.querySelector('.go-top');

    modalBuy.style.display = 'grid';
    goTop.style.display    = 'none';
}

const countNumberInput = document.querySelector('.num');
countNumberInput.addEventListener('input', function (event) {
    const inputValue = event.target.value;

    const sanitizedValue = inputValue.replace(/[^0-9]/g, '');

    event.target.value = sanitizedValue;
});

function buy() {
    alert('Покупка совершена!');
}


function closeForm() {
    const modalBuy = document.querySelector('#modal-buy');
    const goTop    = document.querySelector('.go-top');

    modalBuy.style.display = 'none';
    goTop.style.display    = 'block';
}

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-buy')) {
        openForm();
    }
    if (event.target.classList.contains('btn-close')) {
        closeForm();
    }
    if (event.target.classList.contains('btn-buy-form')) {
        buy();
    }
});