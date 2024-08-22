import Final from "./Final";
import "./Item.css"

function Item({data}){
    console.log("-------------");
    console.log(data);
    
    

    
    return(
        <div className="item">
            {
                data.map((value,index)=>  (<Final value={value} key={value.id}/>))
            
                
                
           
            }
        </div>
    );
}

export default Item;