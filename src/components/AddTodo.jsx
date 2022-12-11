import "../styles/AddTodo.sass";

const AddTodo = ({ text, handleTextChanger, addTodo }) => {
  return (
    <div className="todo__add">
      <form action="#" className="todo__form" onSubmit={(e) => handleTextChanger(e)}>
        <input
          type="text"
          className="todo__input"
          placeholder="Введите задачу"
          value={text}
          onChange={(e) => handleTextChanger(e)}
        />
        <button type="submit" 
                className="todo__button-submit" 
                onClick={addTodo}
                >Добавить
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
