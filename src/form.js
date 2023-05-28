const form = document.createElement('form');
form.classList.add('form-buy');

const countNumberInput = document.createElement('input');
countNumberInput.type  = 'number';
countNumberInput.min   = '1';
countNumberInput.value = '1';
countNumberInput.classList.add('num');
form.appendChild(countNumberInput);

const colors = ['Красный', 'Чёрный', 'Зелёный', 'Синий'];
colors.forEach(color => {
    const label       = document.createElement('label');
    label.textContent = color + ':';

    const radioInput = document.createElement('input');
    radioInput.type  = 'radio';
    radioInput.classList.add('radio-input');
    radioInput.name = 'color';
    radioInput.checked = true;
    label.appendChild(radioInput);

    form.appendChild(label);
});

const commentTextarea = document.createElement('textarea');
commentTextarea.classList.add('comment-text');
form.appendChild(commentTextarea);

const countElement       = document.createElement('span');
countElement.id          = 'count';
countElement.textContent = '0/2000';
form.appendChild(countElement);

const btnBlockForm = document.createElement('div');
btnBlockForm.id    = 'btn-block-form';

const btnBuyForm = document.createElement('div');
btnBuyForm.classList.add('btn-buy-form');
btnBuyForm.textContent = 'Купить';
btnBlockForm.appendChild(btnBuyForm);

const btnClose = document.createElement('div');
btnClose.classList.add('btn-close');
btnClose.textContent = 'Закрыть';
btnBlockForm.appendChild(btnClose);

form.appendChild(btnBlockForm);

const modalBuy = document.querySelector('#modal-buy');
modalBuy.appendChild(form);

const maxLengtn = 2000;

commentTextarea.oninput = function () {

    let text = commentText.value;

    if (text.length > maxLengtn) {
        text = text.slice(0, maxLengtn);
    }

    commentTextarea.value    = text;
    countElement.textContent = commentTextarea.value.length + '/2000';
};

countNumberInput.addEventListener('input', function (event) {
    const inputValue = event.target.value;

    const sanitizedValue = inputValue.replace(/[^0-9]/g, '');

    event.target.value = sanitizedValue;
});

function openForm() {
    const goTop = document.querySelector('.go-top');

    modalBuy.style.display = 'grid';
    goTop.style.display    = 'none';
}

function buy() {
    alert('Покупка совершена!');
}

function closeForm() {
    const goTop = document.querySelector('.go-top');

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


