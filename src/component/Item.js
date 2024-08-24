import Final from "./Final";
import "./Item.css"

function Item({data,del}){
    console.log("-------------");
    console.log(data);
    
    

    
    return(
        <div className="item">
            {
                data.map((value)=>  (<Final value={value} key={value.id} del={del}/>))
            
                
                
           
            }
        </div>
    );
}

export default Item;