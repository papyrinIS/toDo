import React from "react";
import {connect} from "react-redux";
import Task from "./Task";
import {
    deleteTask,
    deleteTaskThunkCreator,
    setTask, setTasksThunkCreator,
    updateNameTaskThunkCreator
} from "../../../Redux/AppReduser";


const TaskContainers =(props) => {


    const setTask =()=>{
        props.setTasksThunkCreator();
    }

    const updateNameTask = (taskName,id) => {
        props.updateNameTaskThunkCreator(taskName,id);
    }

    const deleteTask =(Id)=>{
        const newTask = props.App.tasks;
        props.deleteTaskThunkCreator(Id,newTask);
    }

    return <Task updateNameTaskThunkCreator={props.updateNameTaskThunkCreator}
                 DeleteTask={deleteTask}
                 updateNameTask={updateNameTask}
                 setTask={setTask}
                 setTasksThunkCreator={props.setTasksThunkCreator}
                 { ...props}/>
}

let mapStateToProps =(state) => {
    return{
    App: state.App
}}


export default connect(mapStateToProps,{deleteTask,setTask,deleteTaskThunkCreator, updateNameTaskThunkCreator,setTasksThunkCreator})(TaskContainers)