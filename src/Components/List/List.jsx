import React, {useState} from "react";
import styles from "./List.module.css"
import {TaskReduxForm} from "../Forms/TaskForm";
import TaskContainer from "./Task/TaskContainer";
import useClickOutside from "click-outside-hook";
import close from "../../Assets/img/close.svg"
import plus from "../../Assets/img/plus.svg"



const List = (props) => {



    let taskElements = props.App.tasks.filter(task => props.id === task.listId).map(t => <TaskContainer key={t.id} id={t.id} text={t.text}/>)


    const [editNameList, setEditNameList] = useState(false);
    const activateEditList = () => {
        setEditNameList(true)
    }
    const deactivateEditList = () => {
     props.updateNameList(nameList, props.id)
        setEditNameList(false);
    }


    const [nameList, setNameList] = useState(props.name)
    const editName = (e) => {
        setNameList(e.currentTarget.value)
    }


    const [editForm,setEditForm]=useState(false)
    const activateEditForm = () => {
        setEditForm(true);
    }
    const deactivateEditForm = () => {
        setEditForm(false);
    }

    const AddNewTask =(value) =>{
        props.AddNewTask(value);
        setEditForm(false)
    }

    const ref = useClickOutside(()=>setEditForm(false));


    return <div className={styles.list}>

        <div className={styles.headerList}>

            {editNameList &&

                <input  onBlur={deactivateEditList} onChange={editName} autoFocus={true} value={nameList}/>

            }
            {!editNameList &&

                <span className={styles.spanNameList} onClick={activateEditList}>{nameList}</span>

            }
        </div>




        <span className={styles.deleteList}>
            <img alt = "delete" onClick={() => props.DeleteList(props.id)} src={close}/>
        </span>

        <div className={styles.bodyList}>
            {taskElements}

            {!editForm &&
            <span className={styles.newTask} onClick={activateEditForm}><img alt = "plus" src={plus}/>Добавить ещё одну карточку</span>
            }
            <div ref={ref} >
                {editForm &&
                <TaskReduxForm  deactivateEditForm={deactivateEditForm}   onSubmit={AddNewTask}/>
                }
        </div>


</div>


    </div>

}

export default List;