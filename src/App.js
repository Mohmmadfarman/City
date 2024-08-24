import Data from './Data';
import './App.css';
import Item from './component/Item';
import Form from './component/Form';
import Empty from './component/Empty';
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
  
  function del(dd){
    // console.log(dd);
    
    
    

    setR(r.filter((item) => item.id !== dd)); 
      
      
  }
  function reset(){
    setR(Data)
    
  }
  
  
  return (
    <div className="App">
      <h1 style={{fontSize:"2.5rem"}} className='hd'>Gallery</h1>
      <Form f={handleFormSubmit} />
     
      
      <div>
        {
          (r.length=='0') ? <Empty reset={reset}/> :  <Item data={r} del={del} />
        }
      </div>
        
    
     
      
    </div>
  );
}

export default App;
