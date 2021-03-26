import { numSeven, addNewArrNum, arithmeticProgression } from '../utils'

describe('Тестирование utils', () => {
    
    it('Проверка функции addNewArrNum преобразвывает строку в массив и изменяет тип строки на цифры', () => {
        const testArray = '7, 14, 21, 22, 28, 42, 32, 11, 15';
        const result = [7, 14, 21, 22, 28, 42, 32, 11, 15];
        
        expect(addNewArrNum(testArray)).toEqual(result)
    });

    it('Проверка функции numSeven которая возвращает все числа кратные 7', () => {
        const testArray = [7, 14, 21, 22, 28, 42, 32, 11, 15];
        const result = [7, 14, 21, 28, 42];
        expect(numSeven(testArray)).toEqual(result)
    });

    it('Проверка функции arithmeticProgression возвращает bool если удволетворяет условию задачи', () => {
        const testArray = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];
        
        expect(arithmeticProgression(testArray)).toEqual(true);
    });
    
});
