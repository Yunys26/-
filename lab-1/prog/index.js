const inputArr = document.querySelector('.main__input');

const mainButton = document.querySelector('.main__button');

const textError = document.querySelector('.footer-text__error');

const p = document.getElementsByTagName('p');

const regex = /^((\d\d?\d?\d?\d?)(,\s)?)+$/;

const result = null;

mainButton.addEventListener('click', () => {
    const inputValue = inputArr.value;
    let str = null;

    if (inputValue === '') {
        inputArr.classList.add('error');
        textError.innerHTML = '';
        textError.insertAdjacentHTML('afterbegin', `<p>Вы ничего не ввели</p>`)

    } else if (addNewArrNum(inputValue).length < 10) {
        inputArr.classList.add('error');
        textError.innerHTML = '';
        textError.insertAdjacentHTML('afterbegin', `<p>Нужно ввести ${10 - addNewArrNum(inputValue).length } элементов</p>`)

    } else if (addNewArrNum(inputValue).length > 10) {
        inputArr.classList.add('error');
        textError.innerHTML = '';
        textError.insertAdjacentHTML('afterbegin', `<p>Нужно удалить ${addNewArrNum(inputValue).length - 10} элемента</p>`)

    } else if (!regex.test(inputValue)) {
        inputArr.classList.add('error');
        textError.innerHTML = '';
        textError.insertAdjacentHTML('afterbegin', `<p>Элементы массива введены не правильно</p>`)

    } else {
        str = inputValue;
        arithmeticProgression(numSeven(addNewArrNum(str)));
        textError.innerHTML = '';
        textError.insertAdjacentHTML('afterbegin', `<p>Комбинация введена правильно</p>`)
    }

});
// Преобразвывает строку в массив и изменяет тип строки на цифры
const addNewArrNum = (str) => {
    const newArrayString = str.split(', ');

    const newArrayNum = newArrayString.map((el) => Number(el));

    return newArrayNum;
}

// Возвращает массив
const numSeven = (arr) => {
    const newArr = arr.filter((el) => el % 7 === 0);
    console.log(newArr)
    return newArr;
}
// Возвращает boolean
const arithmeticProgression = (arr) => {

    const step = arr[1] - arr[0];
    let valid = false;

    arr.map((el, index) => {
        if (index !== arr.length - 1) {
            valid = el + step === arr[index + 1]
        }
    });

    if(valid) {
        inputArr.classList.remove('error')
        console.log('Удовлетворяет требованиям')
    } else if (!valid) {
        inputArr.classList.add('error');
        console.log('Таких элементов нет')
    }

    return (valid && arr) || valid;
}
