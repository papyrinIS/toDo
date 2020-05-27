import React from "react";
import styles from "./FormControl.module.css"
import {Field} from "redux-form";


export const CreateField = (placeholder,name,validate,component, props={} ,text ="") => (
    <div>
        <Field className={styles.field} placeholder={placeholder}
               name={name}
               validate = {validate}
               component = {component}
               { ...props}
        /> {text}
    </div>
)


