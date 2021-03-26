import React from 'react';
import { useFormik } from 'formik';
import MyInput from './MyInput';
import MyError from './MyError';
import MyInputNumber from './MyInputNumber';
import MySelect from './MySelect';

const genderItems = [
  { id: 1, name: "male" },
  { id: 2, name: "female" },
  { id: 3, name: "others" },
]

function Dashboard() {

  const validate = values => {
    let errors = {};
    if (!values.firstName) {
      errors['firstName'] = "*First Name is required"
    } else if (values.firstName.length > 16 || values.firstName.length < 8) {
      errors['firstName'] = "*First name must be between 8 - 16 characters"
    }

    if (!values.lastName) {
      errors['lastName'] = "*Last Name is required"
    } else if (values.lastName.length > 16 || values.lastName.length < 8) {
      errors['lastName'] = "*Last name must be between 8 - 16 characters"
    }

    if (!values.email) {
      errors['email'] = "*Email is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors['email'] = "*Email is invalid"
    }

    if (!values.mobile) {
      errors['mobile'] = "*Mobile number is required"
    } else if (values.mobile.toString().length !== 10) {
      errors['mobile'] = "*Mobile number is invalid"
    }
    if (values.gender === '') {
      errors['gender'] = "*Gender is required"
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      gender: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  })

  return (
    <div className="App">
      <form autoComplete="false">
        <div className="custom-top-flex">
          <div className="custom-main-form">
            <MyInput label="firstName" formik={formik} />
          </div>
          <MyError item="firstName" formik={formik} />
        </div>
        <div className="custom-top-flex">
          <div className="custom-main-form">
            <MyInput label="lastName" formik={formik} />
          </div>
          <MyError item="lastName" formik={formik} />
        </div>
        <div className="custom-top-flex">
          <div className="custom-main-form">
            <MyInput label="email" formik={formik} />
          </div>
          <MyError item="email" formik={formik} />
        </div>
        <div className="custom-top-flex">
          <div className="custom-main-form">
            <MyInputNumber label="mobile" formik={formik} />
          </div>
          <MyError item="mobile" formik={formik} />
        </div>
        <div className="custom-top-flex">
          <div className="custom-main-form">
            <MySelect label="gender" formik={formik} items={genderItems} />
          </div>
          <MyError item="gender" formik={formik} />
        </div>
        <div className="custom-main-form" style={{ float: 'right' }}>
          <button type="button" onClick={formik.handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Dashboard;