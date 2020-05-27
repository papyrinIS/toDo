import React, {useState} from "react";
import "./BigForm.moodule.css";
import SubTaskContainer from "../../List/Task/SubTask/SubTaskContainer";
import close from "../../../Assets/img/close.svg";


const BigForm =(props) => {

    const subTaskElements= props.subTask.filter(st => props.id === st.taskId).map(su=><SubTaskContainer key={su.id} complete={su.complete} id={su.id} check={su.check}/>)
    const Des=props.tasks.filter(d => props.id === d.id).map(de=> de.description)
    const nameForm=props.tasks.filter(d => props.id === d.id).map(de=>de.text)

    const [newSubTask,setSubTask] = useState()
    let addNewSubTask =()=>{
        props.AddNewSubtask(props.id,newSubTask);
        setSubTask("")
    }
    let NewSubTask =(e)=>{
        setSubTask(e.currentTarget.value)
    }


    const [visibleDescription,unvisibleDescription] =useState(true)
    const saveDescription = ()=>{
        props.UpdateDescription(props.id,Description);
        unvisibleDescription(true)
    }


    const[Description, setDescription]=useState(Des)
    const addDescription = (e) => {
        setDescription(e.currentTarget.value);

    }



    return <div className="form" >
        <div className="nameForm">
            { nameForm}
        </div>

        {visibleDescription &&
        <span className="description">
            <span>Описание</span>
        <div onClick={()=>unvisibleDescription(false)}>{Description }</div>
        </span>}
        {!visibleDescription &&
            <div>
                <span>описание</span>
                <textarea className="descriptionTextarea" onBlur={saveDescription}
                       placeholder="Описание"
                       name="description"
                          value={Description}
                          onChange={addDescription}
                       autoFocus={true}/>
            </div>
        }



<div className="checkList">
        { subTaskElements }

        <div >
            <textarea onChange={NewSubTask}
                   className="CheckListInput"
                   value={newSubTask}
                   placeholder="Добавить элемент"
                   name="checkboxTextarea"
                   autoFocus={true} />
        </div>
        <button className="addNewSubTask" onClick={addNewSubTask}>Добавить элемент</button>
</div>



       <img alt ="close" className="close" src={close} onClick={props.deactivateBigForm}/>
    </div>
}



export default BigForm;






