import UserGreeting from "./logic/UserGreeting.jsx";

function App() {
    return(
        <>
            <UserGreeting name='Bob' isLoggedIn={true} />
        </>
    );
}


export default App
