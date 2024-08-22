import { useState } from "react";
import img1 from "./agra.jpg"


function Form(props){
    const [newname,setname]=useState('')
    const [newmoney,setmoney]=useState('')
    const [newdis,setdis]=useState('')
    const [id,setid]=useState(9)
    function click(e){
        e.preventDefault()
        setid(id+1)
        const obj={
            id:id,
            city:newname,
            money:newmoney,
            description:newdis,
            image:img1
        }
        console.log(obj);
        props.f(obj)
        setdis('')
        setmoney('')
        setname('')

    }
    function nm(e){
        setname(e.target.value);
        

    }
    function mn(e){
        setmoney(e.target.value);
        

    }
    function ds(e){
        setdis(e.target.value);
       
        
        

    }
    
    return(
        <div>
            <label>City:</label><br />
            <input onChange={nm} type="text" name="" id="" value={newname} /><br />
            <label htmlFor="">Money</label><br />
            <input onChange={mn} type="text" value={newmoney} /><br />
            <label htmlFor="">Discribsution</label><br />
            <input onChange={ds} type="text" value={newdis} /><br />
            <button style={{marginBottom:'40px', marginTop:'30px', padding:'5px', fontSize:'1.3rem'}} onClick={click}>Submit</button>
           
        </div>
    );
}
export default Form;