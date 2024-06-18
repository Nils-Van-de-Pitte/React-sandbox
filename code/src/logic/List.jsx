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

    return (<ol>{listItems}</ol>)
}
export default List