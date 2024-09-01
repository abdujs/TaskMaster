import { useState, useRef, useEffect } from 'react';
import './CSS/Todo.css';
import TodoItems from './TodoItems';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);
    const [count, setCount] = useState(0);

    const add = () => {
        const taskText = inputRef.current.value.trim();
        if (taskText === '') return;

        const newTodo = { no: count + 1, text: taskText, display: '' };
        setTodos(prevTodos => [...prevTodos, newTodo]);
        inputRef.current.value = '';
        setCount(prevCount => prevCount + 1);
    };

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        const storedCount = parseInt(localStorage.getItem('todos_count'), 10) || 0;

        setTodos(storedTodos);
        setCount(storedCount);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('todos_count', count);
    }, [todos, count]);

    return (
        <div className='todo'>
            <div className="todo-header">To-Do List</div>
            <div className="todo-add">
                <input 
                    ref={inputRef} 
                    type="text" 
                    placeholder='Add your task' 
                    className='todo-input' 
                />
                <div onClick={add} className="todo-add-btn">ADD</div>
            </div>
            <div className="todo-list">
                {todos.map(item => (
                    <TodoItems 
                        key={item.no} 
                        setTodos={setTodos} 
                        no={item.no} 
                        display={item.display} 
                        text={item.text} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Todo;