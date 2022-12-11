import { useState } from "react";
import { uid } from 'uid';
import '../styles/Main.sass';
import Clip from "../img/clip.png";
import Ornament from "../img/ornament.png";
import ornamentBig from "../img/ornamentBig.png";
import Header from "./Header";
import todosData from '../data/todos.js';
import AddTodo from "./AddTodo";
import Todos from "./Todos";
import DeleteAllBtn from "./DeleteAll";

const Main = () => {
    const [ text, setText ] = useState("");
    const [ todos, setTodos ] = useState(todosData);

    const handleTextChanger = (e) => {
        e.preventDefault();
        setText(e.target.value);
    };

    const addTodo = () => {
      if(!text) {
        return;
      }
        setTodos([
            {
                id: uid(),
                text: text,
                isImportant: false
            },
            ...todos
        ])
        setText("");
    }

  return (
    <div>
      <div className="clip">
        <img src={Clip} alt="clip" />
      </div>
      <div className="Main__container">
        <Header />
        <div className="oranament-big">
          <img src={ornamentBig} alt="ornament" />
        </div>
        <AddTodo text={text}
                 handleTextChanger={handleTextChanger}
                 addTodo={addTodo} />
        <div className="oranament">
          <img src={Ornament} alt="ornament" />
        </div>
        <Todos text={text} 
               todos={todos} />
        <DeleteAllBtn />
      </div>
    </div>
  );
};

export default Main;
