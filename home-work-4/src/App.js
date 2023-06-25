import './App.css';
import './components/App'
import {useState} from "react";

function App() {
    const [value, setValue]= useState('')
    const handleChange =(e)=>{
        setValue(e.target.value)
    }
    const zet ={
        type: 'text',
        value,
        onChange: handleChange
    }
  return (
    <div>
      <App zet={zet}/>
    </div>
  );
}

export default App;
