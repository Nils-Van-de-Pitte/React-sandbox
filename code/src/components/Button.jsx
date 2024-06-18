import styles from '../assets/css/Button/Button.module.css'


function Button() {


    // Simple click event
    const handleClick = () => console.log('Hello there!')

    // Click event with params
    // const handleClick2 = (name) => console.log(`Hi ${name}`)

    // Click event with counter
    //let count = 0
    // const handleCounter = (name) => {
    //     if (count < 3){
    //         count++
    //         console.log(`${name}, you clicked me ${count} time/s`)
    //     }else{
    //         console.log(`${name}, STOP CLICKING ME!!`)
    //     }
    // }

    // Event param
    // const handleClick = (e) => console.log(e.target.textContent = 'OUCH!')


    // e params is not necessary!
    return(
        <button className={styles.button} onClick={
            (e) => handleClick(e)}>
            Click me!
        </button>
    );
}

export default Button