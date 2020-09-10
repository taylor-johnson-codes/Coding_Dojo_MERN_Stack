import React from 'react';

const MessageForm = (props) => {
    const {color, setColor, submitForm} = props;

    const getColor = (e) => {
        e.preventDefault();
        setColor(e.target.value);
        submitForm();
    }
    
    return (
        <form onSubmit={getColor}>
            <label htmlFor="color">Color</label>
            <input type="text" name="color" onChange={e => setColor(e.target.value)} value={color} />
            <button type="submit">Add</button>
        </form>
    );
};

export default MessageForm;