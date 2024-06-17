
function UserGreeting(props) {
    if(props.isLoggedIn){
        return <h2>Welcome {props.name}</h2>
    }
    else{
        return <h2>Please log in to continue</h2>
    }
}

UserGreeting.propTypes = {
    name: 'Unknown',
    isLoggedIn: false
}

export default UserGreeting;