import React from 'react';

export default function MyError({ item, formik }) {
    return (
        <React.Fragment>
            { formik.touched[item] && formik.errors[item] ? <span className="custom-error-span">{formik.errors[item]}</span> : null }
        </React.Fragment>
    )
}