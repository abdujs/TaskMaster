import './CSS/TodoItems.css';
import tick from './Assets/tick.png';
import no_tick from './Assets/no_tick.png';
import cross from './Assets/cross.png';
import editIcon from './Assets/edit.png'; // Add your edit icon path

const TodoItems = ({ no, display, text, setTodos }) => {
    const deleteTodo = (no) => {
        let data = JSON.parse(localStorage.getItem('todos'));
        data = data.filter(todo => todo.no !== no);
        setTodos(data);
    };

    const toggle = (no) => {
        let data = JSON.parse(localStorage.getItem('todos'));
        const todoIndex = data.findIndex(todo => todo.no === no);
        if (todoIndex !== -1) {
            data[todoIndex].display = data[todoIndex].display === '' ? 'line-through' : '';
            setTodos(data);
        }
    };

    const editTodo = (no) => {
        const newText = prompt("Edit your task:", text);
        if (newText !== null) {
            let data = JSON.parse(localStorage.getItem('todos'));
            const todoIndex = data.findIndex(todo => todo.no === no);
            if (todoIndex !== -1) {
                data[todoIndex].text = newText;
                setTodos(data);
            }
        }
    };

    return (
        <div className="todoitems">
            <div className={`todoitems-container ${display}`} onClick={() => toggle(no)}>
                {display === '' ? <img src={no_tick} alt='Not Completed' /> : <img src={tick} alt='Completed' />}
                <div className="todoitems-text">{text}</div>
            </div>
            <img className='todoitems-cross-icon' onClick={() => deleteTodo(no)} src={cross} alt='Delete' />
            <img className='todoitems-edit-icon' onClick={() => editTodo(no)} src={editIcon} alt='Edit' /> {/* Edit icon */}
        </div>
    );
};

export default TodoItems;