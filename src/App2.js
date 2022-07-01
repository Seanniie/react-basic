import React, { useEffect, useState } from "react";

function App2(){
    const [count,setCount]   = useState(0);
    const [seaniee,setSeanie]   = useState(0);
    useEffect(()=>{
        console.log(count);
    },[count])

    function increment() {
        setCount(count+1);
    }
    return(
        <div className="App">
            <h1>Seannie Coder</h1>
            <button onClick={increment}>Click</button>
            <button onClick={()=>setSeanie(seaniee+1)}>Click</button>
        </div>
    )
}

export default App2;