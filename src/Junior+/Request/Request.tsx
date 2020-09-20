import React, {useState} from 'react';
import MyButton from "../../Common/Button/MyButton";
import MyCheckBox from "../../Common/CheckBox/MyCheckBox";
import styles from './Request.module.css'
import {RequestsAPI} from "../../api/api";

export const Request = () => {
    let [success, setSuccess] = useState(false)
    let [response, setResponse] = useState<any>()

    const request = () => {
        RequestsAPI.requestPost(success)
            .then( (response) => {
                setResponse(response.data)
            })
            .catch(error => {
                setResponse(error)
            });
    }
    const changeSuccess = (checked: boolean) => {
        setSuccess(checked)
    }

    return (
        <div className={styles.requestBlock}>
            <h3 className={styles.title}>Request</h3>
            <MyButton title={"Submit"} onClick={request} styleRed={false}/>
            <MyCheckBox checked={success} changeStatus={changeSuccess}/>
            <div>{JSON.stringify(response)}</div>
        </div>
    )
}