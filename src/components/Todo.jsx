import '../styles/Todo.sass'
import EditIcon from '../img/edit.svg';
import CompleteIcon from '../img/complete.svg'
import DeletIcon from '../img/close.svg'

const Todo = ({ text, isImportatnt }) => {
  let todoClassName = `todo ${isImportatnt && 'todo-important'}`;
  let todoImportantBtnClassName = `todo__importantBtn ${isImportatnt && 'todo__importantBtn-true'}`;

  return (
    <div className={ todoClassName }>
      <div className="todo__text-content">
        <button className={todoImportantBtnClassName}>☆</button>
        <p className="todo__text">{ text }</p>
      </div>
      <div className="todo__buttons">
        <button className="todo__button todo__button-complete">
          <img src={CompleteIcon} alt="complete-icon" />
        </button>
        <button className="todo__button todo__button-edit">
          <img src={EditIcon} alt="edit-icon" />
        </button>
        <button className="todo__button todo__button-delete">
          <img src={DeletIcon} alt="edit-icon" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
