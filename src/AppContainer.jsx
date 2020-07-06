import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import App from "./App"
import {
    addListThunkCreator,
    addNewList,
    setLists,
    setListsThunkCreator, setSubTaskThunkCreator,
    setTasks,
    setTasksThunkCreator
} from "./Redux/AppReduser";


const AppContainers =(props) => {

    let newTask = () => {
        setRenderTasks(false)
    }

    let addNewList =(value)=>{
        props.addListThunkCreator(value.name);
        setRenderLists(false)
    }




   const[renderLists,setRenderLists]=useState(false);
    const[renderTasks,setRenderTasks]=useState(false);

    useEffect(()=> {
        if(!renderTasks){

            props.setTasksThunkCreator();
            props.setSubTaskThunkCreator();
            setRenderTasks(true);
        }
    },[props.setTasksThunkCreator,props.setSubTaskThunkCreator,renderTasks, props]);


    useEffect(()=> {
        if(!renderLists){

            props.setListsThunkCreator();
            setRenderLists(true)
        }
    },[props.setListsThunkCreator,renderLists, props]);






    return <App newTask={newTask}  AddNewList={addNewList} { ...props}/>
}


let mapStateToProps =(state) => {
    return {
        App: state.App.lists,
        Tasks: state.App.tasks,
        subTask:state.App.subTask
    }
}


export default connect(mapStateToProps,{addNewList,setLists, setTasks,setListsThunkCreator,setTasksThunkCreator,addListThunkCreator,setSubTaskThunkCreator})(AppContainers)