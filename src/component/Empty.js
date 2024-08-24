

function Empty({reset}){

      function ref(){
         reset()
         
        
         
      }

    return(
        <div>
            <h1>No items</h1>
            <br />
            <button onClick={ref} className="ref">Refresh</button>

        </div>
    );
}

export default Empty;