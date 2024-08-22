import "./Final.css"

function Final({value}){
    const ll=value.description.slice(0,193)
    
    
    return(
        <div className="gg">
        <div className="box">
           <img className="im" src={value.image} alt="" />
           <h1>{value.city}</h1>
           <h3>$:{value.money}</h3>
           <p>{ll}<span>Read More...</span></p>
          
        </div>
        </div>
    );
}

export default Final;