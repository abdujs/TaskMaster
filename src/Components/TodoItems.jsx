import './CSS/TodoItems.css'
import tick from './Assets/tick.png'
import no_tick from './Assets/no_tick.png'
import cross from './Assets/cross.png'


const TodoItems = ({ no, display, text, setTodos }) => {
  
  const deletTodo = (no) => {
    let data = JSON.parse(localStorage.getItem('todos'));
    data = data.filter((todo) => {
      todo.no !== no;
    })
    setTodos(data);
  }

  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem('todos'));
    for (i = 0; i < data.length; i++){
      if (data[i].no === no) {
        if (data[i].display === '') {
          data[i].display = 'line-through'
        }
        else {
          data[i].display = ''
        }
        break;
      }
    }
    setTodos(data);
  }

  return (
          <div className="todoitems">
              <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no)}}>
                  {display===''?<img src={no_tick} alt=''></img>:<img src={tick} alt=''></img>}
                  <div className="todoitems-text">{text}</div>
              </div>
              <img className='todoitems-cross-icon' onClick={()=>{deletTodo(no)}} src={cross} alt=''></img>
          </div>
    
  )
}

export default TodoItems

// i want to add an edit functionality to the todos
// and want to change the delete icon
// if mabrat ke meta
//add media query (responsivness) to the app