import React, { useState } from "react";
import Counter from "./components/Counter";

function App3(){
    const [buttonName, setButtonName] = useState('클릭');
    function clickButton(){
        setButtonName('Click');
    }
    return(
        <div className="App">
            <h1>Seannie Coder</h1>
            <Counter click = "click1"></Counter>
            <Counter click = {buttonName}></Counter>
            <Counter></Counter>
            <button onClick={clickButton}>Click</button>
        </div>
    );
}

export default App3;