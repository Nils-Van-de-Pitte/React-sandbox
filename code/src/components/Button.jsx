import styles from '../assets/css/Button/Button.module.css'


function Button() {
    let count = 0

    // const handleClick = () => console.log('Hello there!')
    // const handleClick2 = (name) => console.log(`Hi ${name}`)
    const handleCounter = (name) => {
        if (count < 3){
            count++
            console.log(`${name}, you clicked me ${count} time/s`)
        }else{
            console.log(`${name}, STOP CLICKING ME!!`)
        }
    }



    return(
        <button className={styles.button} onClick={
            () => handleCounter('Steve')}>
            Click me!
        </button>
    );
}

export default Button