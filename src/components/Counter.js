import React,{ useState } from "react";

function Counter() {
    const [count,setCount] = useState(0);

    function increment() {
        setCount(count+1);
    };

    return(
        <div className="App">
            <button onClick={increment}>Click {count}</button>
        </div>
    )
};


export default Counter;