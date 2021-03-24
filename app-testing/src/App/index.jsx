import React from 'react';
import { numSeven, addNewArrNum, arithmeticProgression,} from './utils'
import './style.css';

const App = () => {

    const [input, setInput] = React.useState('');
    const [messageUser, setMessageUser] = React.useState('');
    const [errorBorder, setErrorBorder] = React.useState(null);

    const regex = /^((\d\d?\d?\d?\d?)(,\s)?)+$/;

    let validateInput = input.match(regex);

    const handleChangeInput = React.useCallback((event) => setInput(event.target.value), []);
    
    const handleSubmit = React.useCallback((event) => {
        event.preventDefault();

        if (input === '') {
            setMessageUser('Вы ничего не ввели');
            setErrorBorder({border : '2px solid red'});

        } else if (addNewArrNum(input).length < 10) {
            setMessageUser(`Нужно ввести ${10 - addNewArrNum(input).length } элементов`);
            setErrorBorder({border : '2px solid red'});

        } else if (addNewArrNum(input).length > 10) {
            setMessageUser(`Нужно удалить ${addNewArrNum(input).length - 10} элемента`);
            setErrorBorder({border : '2px solid red'});

        } else if (validateInput === null) {
            setMessageUser('Комбинации не соотвествует условию');
            setErrorBorder({border : '2px solid red'});
        } else if(!arithmeticProgression(numSeven(addNewArrNum(input)))) {
            setMessageUser('Комбинации не соотвествует условию');
            setErrorBorder({border : '2px solid red'});
        } else if (arithmeticProgression(numSeven(addNewArrNum(input)))) {
            setMessageUser('');
            setErrorBorder({border : '2px solid green'});
        }

    }, [input, validateInput]);

    return (
        <div className="container">
            <header>
                <div className="title">
                    <h1>Введите элементы массива</h1>
                </div>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <input
                        style={errorBorder}
                        type="text"
                        className="main__input"
                        placeholder="Введите элементы"
                        onChange={handleChangeInput}
                        value={input}
                    />
                    <button
                        type="submit"
                        className="main__button btn btn1"
                    >
                        Получить результат
                    </button>
                </form>
            </main>
            <footer>
                <div className="footer-text__error">
                    <p>{messageUser}</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
