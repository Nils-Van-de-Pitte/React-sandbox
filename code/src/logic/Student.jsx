import style from '../assets/css/Student/Student.module.css'
import PropTypes from "prop-types";


function Student(props){
    return(
            <div className={style.Student}>
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p>Student: {props.isStudent ? "Yes" : "No"}</p>
            </div>

    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}


export default Student;