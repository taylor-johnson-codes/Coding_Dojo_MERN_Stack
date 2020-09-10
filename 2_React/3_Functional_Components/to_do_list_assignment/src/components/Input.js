import React from 'react'

const Input = (props) => {
    const {list, setList} = props;

    let task = {
        name: "",
        isComplete: false
    };

    const onChange = (e) => {
        task.name = e.target.value;
    };

    const onClick = (e) => {
        setList([...list, task])  // adding the new object item to the end of an existing array of objects
        e.target.value = "";  // clears out data after submission; clean-up
        task = "";
    };

    return (
        <div className="container">
            <input type="text" name="task" onChange={onChange}/>
            <button className="btn btn-primary" type="submit" onClick={onClick}>Add</button>
        </div>
    )
}

export default Input