import {connect} from "react-redux";
import {
    addNewTask,
    initializeTask,
    deleteList,
    deleteListThunkCreator,
    editNameList,
    setTasks, updateNameListThunkCreator
} from "../../Redux/AppReduser";
import List from "./List";
import React from "react";


const ListContainers = (props) => {

    let deleteList = (Id) => {
        const newList= props.App.lists
        props.deleteListThunkCreator(Id,newList)
    }

    let updateNameList = (nameList,id)=>{
        props.updateNameListThunkCreator(nameList,id)
    }

    const addNewTask = (value) => {
        props.initializeTask(props.id,value.text);
        props.newTask();
    }




    return <List DeleteList={deleteList}
                 AddNewTask={addNewTask}
                 editName={editNameList}
                 updateNameList={updateNameList}
                 updateNameListThunkCreator={props.updateNameListThunkCreator}
                 { ...props}/>
}


let mapStateToProps =(state) => {
    return{
    App: state.App
}}


export default connect(mapStateToProps,{setTasks,deleteList,addNewTask,editNameList, initializeTask,deleteListThunkCreator, updateNameListThunkCreator })(ListContainers)