import React, {useEffect, useState} from "react";
import BigForm from "./BigForm"
import {connect} from "react-redux";
import {
    addNewSubTaskThunkCreator,
    setSubTask, setSubTaskThunkCreator,
    setTask, setTasksThunkCreator,
    updateDescriptionThunkCreator
} from "../../../Redux/AppReduser";



const BigFormContainers =(props) => {

    const[renderSubTask,setRenderSubTask]=useState(false)

    let AddNewSubtask =(id,newSubTask)=>{
        props.addNewSubTaskThunkCreator(id,newSubTask)
        setRenderSubTask(false)

    }

    useEffect(()=> {
        if(!renderSubTask) {
            props.setSubTaskThunkCreator();
            setRenderSubTask(true)
        }
    },[props.setSubTaskThunkCreator,renderSubTask,props])

    const [renderTask,setRenderTask] = useState(false)
    useEffect(()=>{
        if(!renderTask){
            props.setTasksThunkCreator();
            setRenderTask(true)
        }
    },[props.setTasksThunkCreator,renderTask,props])

    let UpdateDescription = (id,Description) => {
        props.updateDescriptionThunkCreator(id,Description);
        setRenderTask(false)
    }

    return <BigForm
        AddNewSubtask={AddNewSubtask}
        UpdateDescription={UpdateDescription}
        addNewSubTaskThunkCreator={props.addNewSubTaskThunkCreator}
        {...props}/>
}



const mapStateToProps =(state) => {
    return{
        subTask: state.App.subTask,
        tasks: state.App.tasks

    }
}

export default connect(mapStateToProps,
    {setTask,updateDescriptionThunkCreator,setSubTask,
        setSubTaskThunkCreator,addNewSubTaskThunkCreator,setTasksThunkCreator})
(BigFormContainers);