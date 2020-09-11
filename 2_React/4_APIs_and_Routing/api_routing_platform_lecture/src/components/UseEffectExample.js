import React from 'react'

const Example = (props) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, []);
    // useEffect will run on first render (right when we load the component). However, it will also change whenever 
    // a variable in the second argument changes. If we have an empty array in the second argument, it will never change. 
    // Therefore, it will only run on first render.

    /*
    Let's say we wanted it to run when something in state changed. For example, we want to run the method when we 
    submit a form. We could write the following:
        
        useEffect(()=>{
            alert("When will this run?");
        }, [state.isSubmitted]);

        In this case, if we submit the form, state.isSubmitted will change in our onSubmitHandler. So, state.isSubmitted 
        will change and useEffect will be triggered.
    */


    return (
        <div>
            {people.length > 0 && people.map((person, index) => {
                return (<div key={index}>{person.name}</div>)
            })}
        </div>
    );
}

export default UseEffectExample

/*
Fetch is simply a way to make a request in Javascript. When we make a request to the Star Wars API, we will get a 
response, and part of that response is a list of the people in the Star Wars API. We will then use setPeople in order 
to keep track of the list of people.

In our return, we will only map through the people's names if there is at least one person. Otherwise, it will just output nothing.
*/


/*
UseEffect is another hook that we can use in functional components. We use useEffect in order to manage "side Effects" 
in our React project. If you use useEffect in a functional component, this method will execute directly after the 
component is rendered, and every time the component updates.
*/