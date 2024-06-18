import styles from '../assets/css/Button/Button.module.css'


function Button() {

    const handleClick = () => console.log('Hello there!')

    return(
        <button className={styles.button} onClick={handleClick}>
            Click me!
        </button>
    );
}

export default Button