import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function TextFieldComponent(props){
    return(
        <React.Fragment>
        <TextField
        label={props.label} name={props.name}
        type = {props.type ? props.type : 'text'}
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        value={props.formik.value} />
        {props.formik.errors[props.name] && props.formik.touched[props.name] && props.formik.errors[props.name]}
        </React.Fragment>
    )
}