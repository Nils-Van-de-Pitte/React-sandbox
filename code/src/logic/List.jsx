import {array, string} from "prop-types";

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
            <h3>{props.category}</h3>
            <ol>{listItems}</ol>
        </>
    )
}

List.default = {
    items: null,
    category: 'Unknown'
}

List.propTypes = {
    items: array,
    category: string
}

export default List