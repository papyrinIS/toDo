import React, {useState} from "react";
import styles from "./SubTask.module.css"
import close from "../../../../Assets/img/close.svg"


const SubTask = (props) => {


    const deleteSubTask =()=>{
        const subtask = props.subTask;
        props.DeleteSubTask(props.id,subtask);
    }

const [checkbox,setCheck]=useState(props.complete)
    let onCheck = () =>{
            if(checkbox===true)
            {setCheck(false)}
            if(checkbox===false)
            {setCheck(true)}


    }
    let onBlur=()=>{
        props.updateCheck(props.id,checkbox);
    }


    return<div className={styles.subTask}>
        <input id="check" checked={checkbox} onBlur={onBlur}  onChange={onCheck} type="checkbox"/>
        <label htmlFor="check"> {props.check } </label>
        <img alt = "close" src={close} onClick={deleteSubTask}/>




    </div>
}

export default SubTask;