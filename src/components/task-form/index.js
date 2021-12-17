import "./Task-form.css"

function TaskForm(params) {
    return(
      <div className = "task-form">
        <input id= "task-input" type = "text"></input>
        <button id = "task-button">Create</button>
      </div>
    );
  
  }

  export default TaskForm;