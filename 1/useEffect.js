import { useState, useEffect } from "react";


function Hello(){
    useEffect(()=>{
        console.log("I'm here")
    },[])
    return <h1>Hello</h1>
}

function App(){
    const[showing, setShowing] = useState(false);
    const onClick=()=> setShowing(prev=>!prev);


    return (
    <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick}>{showing ? "Hide" : "show"}</button>
    </div>
    )
}

export default App;