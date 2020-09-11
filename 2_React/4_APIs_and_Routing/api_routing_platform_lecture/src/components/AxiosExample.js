// Axios is a 3rd party library that allow us to easily expand upon the functionality of Javascript
// Axios is a library that allows us to easily configure API calls in Javascript and our React app
// install in terminal: npm install axios

import Axios from 'axios'
import React from 'react'

const AxiosExample = (props) => {
    // Let's talk about the useEffect hook again. When we make API calls, we will generally want to do it only when 
    // the component first renders. For example:

    const [responseData, setResponseData] = useState(null);
    useEffect(() => {
        axios.get("http://www.example.com")
        .then((response) => { setResponseData(response.data) })
    }, []); 

    return <div>{responseData}</div>;
}

export default AxiosExample