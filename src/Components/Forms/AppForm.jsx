import React from "react";
import {Field, reduxForm, reset} from 'redux-form';
import styles from "./AppForm.module.css"



const AppForm = (props) => {
    return <form className={styles.form} onSubmit={props.handleSubmit}>
        <Field className={styles.field}  placeholder="Введите заголовок списка" name="name" component="input" autoFocus={true} autocomplete="off"/>
        <div className={styles.formButton}>
            <button type="submit">Добавить список</button><button onClick={props.deactivateAddList}>отмена</button>
        </div>
    </form>
}


const afterSubmit = (result, dispatch) =>
    dispatch(reset('app'));

export const AppReduxForm = reduxForm({
    form: 'app',
    onSubmitSuccess: afterSubmit,
})(AppForm);



