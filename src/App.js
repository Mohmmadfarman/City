import Data from './Data';
import './App.css';
import Item from './component/Item';
import Form from './component/Form';
import { useState } from 'react';

function App() {
  const [r, setR] = useState(Data);
  const [rec, setRec] = useState("");

  function handleFormSubmit(data) {
    console.log(data);
    setRec(data);
    setR([...r, data]); // Correctly update the state with the new record
  }
  console.log("------all--------");
  console.log(r);
  
  
  return (
    <div className="App">
      <h1 style={{fontSize:"2.5rem"}} className='hd'>Gallery</h1>
      <Form f={handleFormSubmit} />
      <Item data={r} />
    </div>
  );
}

export default App;
