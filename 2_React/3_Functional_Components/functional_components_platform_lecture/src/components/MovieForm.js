// VALIDATIONS EXAMPLE
// (look at More Forms assignment for another example)

const MovieForm = (props) => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
        if(e.target.value.length < 1) {
            setTitleError("Title is required!");
        } else if(e.target.value.length < 3) {
            setTitleError("Title must be 3 characters or longer!");
        }
    }


    return (
        <form onsubmit={ (e) => e.preventDefault() }>
            <div>
                <label>Title: </label>
                <input type="text" onChange={ handleTitle } />
                {
                    titleError ?
                    <p style={{color:'red'}}>{ titleError }</p> :
                    ''
                }
            </div>
            <input type="submit" value="Create Movie" />
        </form>
    );
}



// example of passing two args to the onClickHandler
const MyComponent = props => {
    const onClickHandler = (e, value) => {
        alert(value);
    }

    return props.movies.map((item, index) => {
        return <button onClick={(e) => onClickHandler(e, item)}>{item}</button>
    });
}