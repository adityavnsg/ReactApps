import React from 'react';

export default function MyInput({ label, formik }) {
    return (
        <React.Fragment>
            <label className="custom-main-label" htmlFor={label}>{label.toUpperCase() + ':'}</label>
            <input
                id={label}
                name={label}
                className="custom-main-type"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.value}
            />
        </React.Fragment>
    )
}