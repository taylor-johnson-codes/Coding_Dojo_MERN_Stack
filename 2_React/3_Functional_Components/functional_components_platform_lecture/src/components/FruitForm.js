// Dealing with the select element and checkbox form input types

import React, { useState } from 'react';

const fruits = [
    'banana',
    'pineapple',
    'peach',
    'apple'
];

export default function FruitForm() {
    const [selectedFruit, setSelectedFruit] = useState(fruits[0]);
    const [isTasty, setIsTasty] = useState(false);

    /*
    If you don't pass an initial value to the useState call, the initial value will be undefined. This is not likely 
    what you want. Instead, if you want a blank value, you can pass an empty string as the initial value, and set up 
    an empty option above where you map over the others, as in the following:
    ...
    const [myVal, setMyVal] = useState('');
    ...
    <option value="">Please select a value</option>
    {options.map(...
    */

    function handleSubmit(event) {
        event.preventDefault();
        console.log('The ' + selectedFruit + ' is' + (isTasty ? '' : ' not') + ' tasty!');
    }

    return (
        <form onSubmit={handleSubmit}>
            <select value={selectedFruit} onChange={e => setSelectedFruit(e.target.value)}>
                {fruits.map((fruit, idx) => (
                    <option key={idx} value={fruit}>{fruit}</option>
                ))}
            </select>
            <label>
                <input type="checkbox" checked={isTasty} onChange={e => setIsTasty(e.target.checked)} /> Is it tasty?
            </label>
            <button>Take a bite!</button>
        </form>
    );
}