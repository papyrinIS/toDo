import React from "react";
import {reduxForm, reset} from 'redux-form';
import {CreateField} from "./FormControl/FormControl";
import styles from "./TaskForm.module.css"

const TaskForm = (props) => {

    return <form onSubmit={props.handleSubmit}>

        {CreateField("Добавить новую задачу","text", null, "textarea", {autoFocus:true})}
        <div className={styles.addTaskButtons}>
            <button  type="submit">добавить</button><button onClick={props.deactivateEditForm}>отмена</button>
        </div>
    </form>
}


const afterSubmit = (result, dispatch) =>
    dispatch(reset('task'));

export const TaskReduxForm = reduxForm({
    form: 'task',
    onSubmitSuccess: afterSubmit,
})(TaskForm);



