import { useState } from "react"
import Child1 from "./Child1"
import Child2 from "./Child2";

export default function Parent(){

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (value) => {
        setInputValue(value);
    }


    return (
        <div>
            <h1>State Lifting</h1>
            <Child1 onInputChange={handleInputChange}/>
            <Child2 displayValue={inputValue}/>

        </div>
    )
}