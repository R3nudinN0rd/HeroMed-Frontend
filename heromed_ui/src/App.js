import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
 const[data, setData]=useState()
  
  useEffect(() => {
    fetch("http://localhost:5265/api/employees").then(data => data.json()).then(info => setData(info))
  },[])
  
  return (
    <div className="App">
      {data && data.map(item => (
        <p>{item.email}-{item.firstName}</p>
      ))}
    </div>
  );
}

export default App;
