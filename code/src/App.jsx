import Student from "./logic/Student.jsx";


function App() {
    return(
        <>
            <Student name='Steve' age={30} isStudent={true}/>
            <Student name='Bob' age={39} isStudent={false}/>
            <Student/>

        </>
    );
}


export default App
