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

    return valid;
}


export {
    numSeven,
    addNewArrNum,
    arithmeticProgression,
}