import "../styles/Todos.sass"
import Todo from "./Todo";

const Todos = ({ todos }) => {
    return (
        <div className="todos">
          {
            todos.map(todo => {
              return <Todo 
              key={todo.id} 
              text={todo.text} 
              isImportatnt={todo.isImportant}/>
            })
          }
        </div>
      );
}

export default Todos;
