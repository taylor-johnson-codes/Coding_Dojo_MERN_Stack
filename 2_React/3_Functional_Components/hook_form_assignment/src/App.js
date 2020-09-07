import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Results from './components/Results';

function App() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  return (
    <div>
      <Form inputs={state} setInputs={setState}/>
      <Results data={state}/>
    </div>
  );
}

export default App;