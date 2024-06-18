import styles from '../assets/css/Button/Button.module.css'


function Button() {

    // const handleClick = () => console.log('Hello there!')
    const handleClick2 = (name) => console.log(`Hi ${name}`)

    return(
        <button className={styles.button} onClick={
            () => handleClick2('Steve')}>
            Click me!
        </button>
    );
}

export default Button