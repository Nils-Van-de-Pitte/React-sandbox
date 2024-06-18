function List(){
    const fruits = [
                    {id: 1, name: "apple", calories: 95},
                    {id: 2, name: 'orange', calories: 9},
                   ]

    const listItems = fruits.map(
        fruit =>
            <li key={fruit.id}>
                {fruit.name}: &nbsp;
                <b>{fruit.calories}</b>
            </li>);

    // Sort Lexicographical (alphabetical)
    fruits.sort((a, b) => a.name.localeCompare(b.name))

    // Sort Numeric
    // fruits.sort((a, b) => a.calories - b.calories);

    return (<ol>{listItems}</ol>)
}
export default List