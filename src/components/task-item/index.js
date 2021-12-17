import "./Task-item.css"

function TaskItem(props) {
    return(
        <div className ={`task-item ${props.data.done ? "task-item -- done" : ""}`}>
            <input type = "checkbox" onClick={props.onDone} checked = {props.data.done ? "checed" : ""}></input>
            <span className = "task-item__title">{props.data.title}</span>
            <button className ="task-item__delete">Удалить</button>
        </div>


    );
}

export default TaskItem;