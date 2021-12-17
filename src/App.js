import './App.css';

import TaskForm from './components/task-form';

import TaskList from './components/task-list';

const data = {
list: [
  {id : 1, title: "Вымыть посуду", done: false},
  {id : 2, title: "Покормить собаку", done: false},
  {id : 3, title: "Погулять с котом", done: true},
]
}

function taskDone(id) {
  const ind = data.list.findIndex((task) => task.id == id)

  if(ind !== -1){
    data.list[ind].done = !data.list[ind].done
  }
}

function App() {
  return (
    <div className="conteiner">
      <header>
        <div className="content">
        <h1>TODO</h1>
        </div>
      </header>
      <main>
      <TaskForm/>
      <TaskList list={data.list} onDone={taskDone} />
      </main>
      <div className="content">
      <footer> 
      
        <p>2021</p>
      </footer>
      </div>
    </div>
  );
}

export default App;
