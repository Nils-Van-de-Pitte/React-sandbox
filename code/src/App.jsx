import List from "./logic/List.jsx";

function App() {

    const fruits = [
                    {id: 1, name: 'Apple', calories: 95},
                    {id: 2, name: 'Orange', calories: 45}
                   ]

    const vegetables = [
        {id: 1, name: 'Potatoes', calories: 110},
        {id: 2, name: 'Carrots', calories: 15}
    ]

    return(
        <>
            <List items = {fruits} category='Fruits'/>
            <List items = {vegetables} category='Vegetables'/>

        </>
    );
}


export default App
