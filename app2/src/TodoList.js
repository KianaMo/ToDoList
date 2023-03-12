import React from 'react';
import Todotable from './Components/Todotable'

function TodoList() {
    const [desc, setDesc] = React.useState('');
    const [date, setDate] = React.useState('')
    const [todos, setTodos] = React.useState([]);



    const inputChanged = (event) => {
        setDesc(event.target.value);

    }
    const inputChanged2 = (event) => {
        setDate(event.target.value);
    }
    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, { desc, date }])

        setDesc('');
        setDate('');

    }
    const deleteTodo = (row) => {
        setTodos(todos.filter((todo, index) => index !== row))
    }
    return (
        <div>
            <p className="groove"> <h1>My Todos:</h1>
                Description: <input type="text" onChange={inputChanged} value={desc} />
                Date: <input type="text" onChange={inputChanged2} value={date} />
                <button onClick={addTodo}>Add</button></p>

            <Todotable deleteFunc={deleteTodo} todos={todos} />
        </div>
    )

};

export default TodoList;

