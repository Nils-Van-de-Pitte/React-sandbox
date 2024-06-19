import {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)

    }

    const decrease = () => {
        if (count > 0){
            setCount(c => c - 1)
        }
    }

    const reset = () => {
        setCount(0)
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter