import './App.css';

const array1 = ['タスク1','タスク2','タスク3'];

function App() {
  return (
    <div className="todos">
      {array1.map(task => (
        <div>
          <input type="text" value={task}/>
          <button>削除</button>
          <button>完了</button>
        </div>
      ))}
      </div>
  );
}

export default App;
