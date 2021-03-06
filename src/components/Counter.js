import React,{ useState } from "react";

function Counter(props) {
    const [count,setCount] = useState(0);

    function increment() {
        setCount(count+1);
    };

    const clickString = props.click || 'Click';

    return(
        <div className="App">
            <button onClick={increment}>
                {clickString} {count}
            </button>
        </div>
    )
};


export default Counter;