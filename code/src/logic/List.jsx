function List(){
    const fruits = ['apple', 'orange']

    // eslint-disable-next-line react/jsx-key
    const listItems = fruits.map(fruit => <li>{fruit}</li>);

    return (<ul>{listItems}</ul>)
}
export default List