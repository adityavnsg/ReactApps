import React from 'react';

export default function MyInputNumber({ label, formik }) {
    return (
        <React.Fragment>
            <label className="custom-main-label" htmlFor={label}>{label.toUpperCase() + ':'}</label>
            <input
                id={label}
                name={label}
                className="custom-main-type"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.value}
            />
        </React.Fragment>
    )
}