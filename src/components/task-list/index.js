import "./Task-list.css"

import TaskItem from "../task-item";

function TaskList(props) {
    return(
        <div className ="task-list">
           <div className = "content">
            { props.list.map((item) => <TaskItem data={item} onDone={props.onDone}></TaskItem>)}
           </div> 
        </div>


    );
}

export default TaskList;