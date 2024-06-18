import {useState} from "react";

function StateComponent(){

    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0)
    const [status, setStatus] = useState(false)

    const updateName = () => {
        setName("Steve")
    }

    const updateAge = () => {
        setAge(age + 1)
    }

    const toggleStatus = () => {
        setStatus(!status)
        console.log(!status)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age {age}</p>
            <button onClick={updateAge}>Set Age</button>

            <p>Status {status}</p>
            <button onClick={toggleStatus}>Set status</button>
        </div>
    )
}

export default StateComponent