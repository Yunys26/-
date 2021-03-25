import React from 'react'
import App from '..'
import { shallow } from 'enzyme'

describe('Тестирование компоненты App', () => {

    const component = shallow(<App />);

    it('Проверка на рендер', () => {
        expect(component.length).toBe(1);
    });

    it('Присутсвует ли claasName container', () => {
        expect(component.find('.container')).toHaveLength(1);
    });

    it('Присутсвует ли тэг header', () => {
        expect(component.find('header')).toHaveLength(1);
    });
    
    it('Присутсвует ли claasName title', () => {
        expect(component.find('.title')).toHaveLength(1);
    });

    it('Присутсвует ли заголовок с текстом', () => {
        expect(component.find('h1').at(0).text()).toEqual('Введите элементы массива');
    });

    it('Присутсвует ли тэг main', () => {
        expect(component.find('main')).toHaveLength(1);
    });

    it('Присутсвует ли тэг form', () => {
        expect(component.find('form')).toHaveLength(1);
    });

    it('Присутсвует ли тэг input', () => {
        expect(component.find('input')).toHaveLength(1);
    });

    it('Присутсвует ли claasName main__input', () => {
        expect(component.find('.main__input')).toHaveLength(1);
    });

    it('Присутсвует ли тэг button', () => {
        expect(component.find('button')).toHaveLength(1);
    });

    it('Присутсвует ли claasName main__button', () => {
        expect(component.find('.main__button')).toHaveLength(1);
    });

    it('Присутсвует ли кнопка с текстом', () => {
        expect(component.find('button').at(0).text()).toEqual('Получить результат');
    });

    it('Присутсвует ли тэг footer', () => {
        expect(component.find('footer')).toHaveLength(1);
    });

    it('Присутсвует ли claasName footer-text__error', () => {
        expect(component.find('.footer-text__error')).toHaveLength(1);
    });

    it('SnapShots component App', () => {
        expect(component).toMatchSnapshot();
    });
});
