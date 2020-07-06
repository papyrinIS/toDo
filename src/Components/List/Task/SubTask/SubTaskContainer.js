import React from "react";
import {connect} from "react-redux";
import {
    deleteSubTaskThunkCreator,
    initializeSubTask
} from "../../../../Redux/AppReduser";
import SubTask from "./SubTask";

const SubTaskContainers = (props) => {

    const DeleteSubTask = (id,subtask) => {
        props.deleteSubTaskThunkCreator(id,subtask);
    }

    const updateCheck = (id,checkbox)=>{
        props.initializeSubTask(id,checkbox);
    }

    return<SubTask updateCheck={updateCheck}
                   DeleteSubTask={DeleteSubTask}
                   {...props}/>
}


const mapStateToProps =(state) => {
    return{
        subTask: state.App.subTask
    }
}

export default connect(mapStateToProps,{deleteSubTaskThunkCreator,initializeSubTask})(SubTaskContainers)