import React, {useEffect, useState} from "react";
import styles from "./Task.module.css"
import edit from "../../../Assets/img/edit.svg"
import close from "../../../Assets/img/close.svg"
import complete from "../../../Assets/img/complete.svg"
import Modal from "../../Modal";
import BigFormContainer from "../../Forms/bigForm/BigFormContainer";



const Task = (props) => {

const subTaskAll = props.App.subTask.filter(a=>props.id===a.taskId).length
    const SubTaskAll = props.App.subTask.filter(a=>props.id===a.taskId)
    const subTaskComplete= SubTaskAll.filter(b=>b.complete===true).length


    const[renderDescription,setRenderDescription]=useState(false)
    useEffect(()=> {
        if(!renderDescription) {
            props.setTask();
            setRenderDescription(true)
        }
    },[renderDescription, props])

    const [taskName,setTaskName]=useState(props.text)
    const newTaskName = (e)=>{
        setTaskName(e.currentTarget.value);
    }




    const[editMode,setEditMode]=useState(true);
    const saveNewTask=()=>{
        props.updateNameTask(taskName, props.id);
        setEditMode(true)
    }
    const activateEditMode = () => {
        setEditMode(false)
    }


    const [bigForm, setBigForm]=useState(true);
    const deactivateBigForm = () => {
        setRenderDescription(false)
        setBigForm(true)
    }

    return<div className={styles.task}>

                {editMode &&
                    <div>
                        <span className={styles.taskTitle} >
                            <span className={styles.taskName} onClick={()=>setBigForm(false)}> {taskName}</span>
                            <div className={styles.comleteTitle}><img alt="complete" src={complete}/>{subTaskComplete}/{subTaskAll}</div>
                      <img alt = "edit" className={styles.editIcon}  onClick={activateEditMode} src={edit}/>
                            <img alt = "close" className={styles.closeIcon} onClick={()=>props.DeleteTask(props.id)} src={close}/>
                        </span>
                    </div>
                }
                {!editMode &&
                <div className={styles.editTask}>
                    <input onChange={newTaskName}  value={taskName} />
                    <div>
                        <button onClick={saveNewTask}>сохранить</button>
                    </div>
                </div>
                }




        {!bigForm &&

        <div  className={styles.modalWrapper}>
            <div  className={styles.modal}>
                <Modal  >

                    <BigFormContainer description={props.description} key={props.id} id={props.id} deactivateBigForm={deactivateBigForm}   />
                </Modal>
            </div>
            <div onClick={deactivateBigForm} className={styles.overlay}></div>
        </div>


        }

    </div>
}


export default Task;