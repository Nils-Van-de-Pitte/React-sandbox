import PropTypes, {string} from "prop-types";
import style from '../assets/css/List/list.module.css'

function List(props){

    const itemList = props.items

    // Filter list
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    // Sort Numeric
    // fruits.sort((a, b) => a.calories - b.calories);

    // Sort Lexicographical (alphabetical)
    // props.fruits.sort((a, b) => a.name.localeCompare(b.name))

    const listItems = itemList.map(
        item =>
            <li key={item.id}>
                {item.name}: &nbsp;
                <b>{item.calories}</b>
            </li>);

    return(
        <>
            <h3 className={style.category}>{props.category}</h3>
            <ol className={style.items}>{listItems}</ol>
        </>
    )
}

List.defaultProps = {
    items: [],
    category: 'Unknown'
}

List.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            calories: PropTypes.number})),
    category: string
}

export default List