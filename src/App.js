import './App.css';
import React, {useState, useRef} from 'react';

function App() {
  const [array1,setArray1] = useState([]);
  const textRef = useRef(null);

  // タスクを追加
  const addTodo = (value) => {
    if(value !== ""){
      setArray1([...array1,value]);
      textRef.current.value = "";
    }
  }

  // タスクを削除
  const deleteTodo = (i) => {
    const newArray1 = [...array1];
    newArray1.splice(i, 1);
    setArray1(newArray1);
  }

  return (
    <div className="todos">
      <div>

        <h2>タスクを追加</h2>
        <input ref={textRef} type="text" />
        <button onClick={() => addTodo(textRef.current.value)}>追加</button>

        <div className="spacer_30"></div>

        <h2>タスク</h2>
        {array1.map((task,i) => (
          <div>
            <input type="text" value={task}/>
            <button onClick={() => deleteTodo(i)}>削除</button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
