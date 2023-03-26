import React, { useState, useRef } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
function TodoList() {
    const [desc, setDesc] = React.useState('');
    const [date, setDate] = React.useState('');
    const [priority, setPriority] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    const gridRef = useRef();




    const inputChanged = (event) => {
        setDesc(event.target.value);

    }
    const inputChanged2 = (event) => {
        setDate(event.target.value);
    }
    const inputChanged3 = (event) => {
        setPriority(event.target.value);
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, { desc, date, priority }])

        setDesc('');
        setDate('');
        setPriority('');

    }
    const columns = [
        { headerName: 'Date', field: 'date', sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Description', field: 'desc', sortable: true, filter: true, floatingFilter: true },
        { headerName: 'Priority', field: 'priority', sortable: true, filter: true, floatingFilter: true, cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' } }
    ]

    const deleteTodo = () => {
        setTodos(todos.filter((todo, index) =>
            index != gridRef.current.getSelectedNodes()[0].id))

    };

    return (
        <div>
            <p className="groove"> <h1>My Todos:</h1>
                Description: <input type="text" onChange={inputChanged} value={desc} />
                Date: <input type="text" onChange={inputChanged2} value={date} />
                Priority: <input type="text" onChange={inputChanged3} value={priority} />

                <button onClick={addTodo}>Add</button>
                <button onClick={deleteTodo}>Delete</button></p>

            <div className="ag-theme-material" style={{ height: '700px', width: '80%', margin: 'auto' }}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowSelection="single"
                    columnDefs={columns}
                    rowData={todos}
                    floatingFilter={true}
                    animateRows={true}
                >

                </AgGridReact>
            </div>
        </div>
    )

};

export default TodoList;

