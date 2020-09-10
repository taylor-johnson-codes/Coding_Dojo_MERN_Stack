import React from 'react'

const Task = (props) => {
    const {task, index, list, setList} = props;

    const onClick = (e) => {
        setList(() => list.filter(task => list.indexOf(task) !== index));
    };

    const onChange = () => {
        // checking to see if box is checked or not
        list[index].isComplete = !list[index].isComplete;  // opposite
        setList([...list]);
    }

    return (
        <div className="container bg-secondary">
            <h4>{task.name}</h4>
            <div className="container">
                <label htmlFor="checkbox">Completed?</label>
                <input type="checkbox" checked={task.isComplete} onChange={onChange}/>
                <button className="btn btn-sm danger" onClick={onClick}>Delete</button>
            </div>
        </div>
    )
}

export default Task