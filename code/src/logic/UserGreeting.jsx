import style from '../assets/css/Account/Account.module.css';


function UserGreeting(props) {
    if(props.isLoggedIn){
        return <h2 className={style.loggedOut}>Welcome {props.name}</h2>
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