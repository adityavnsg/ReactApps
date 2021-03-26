import React from 'react';

export default function MySelect({ label, formik, items }) {
    return (
        <React.Fragment>
            <label className="custom-main-label" htmlFor={label}>{label.toUpperCase()+':'}</label>
            <select className="custom-main-type" id="gender" name="gender" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.value}>
                <option value="">--select {label}--</option>
                {items.map((item) => 
                    <option key={item.id} value={item.name}>{item.name}</option>
                )}
            </select>
        </React.Fragment>
    )
}