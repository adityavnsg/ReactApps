import React from 'react';
import { useFormik } from 'formik';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import './InsurenceForm.css';
import TextFieldComponent from '../common-components/TextFieldComponent';
import { InsurenceFormConfig } from './InsurenceForm.config';
import {withRouter} from 'react-router-dom';

function InsurenceForm(props) {
    const handleNavigate = (props)=>{
       props.history.push('sample');
    }
    const formik = useFormik({
        initialValues: { email: '', password: '', cpassword: '', fname: '', mname: '', lname: '', insurenceCheckbox: false },
        validate: values => {
            const errors = {};
            if (!values.email) {
            errors.email = <span style={{ color: 'red' }}>{InsurenceFormConfig.errorMessages.noEmail}</span>;
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = <span style={{ color: 'red' }}>{InsurenceFormConfig.errorMessages.invalidEmail}</span>;
            }
            if (!values.fname) {
                errors.fname = <span style={{ color: 'red' }}>{InsurenceFormConfig.errorMessages.noFirstname}</span>
            } else if (!/^[A-Za-z]+$/.test(values.fname)) {
                errors.fname = <span style={{ color: 'red' }}>{InsurenceFormConfig.errorMessages.invalidFirstname}</span>;
            }
            if (!values.lname) {
                errors.lname = <span style={{ color: 'red' }}>{InsurenceFormConfig.errorMessages.noLastname}</span>
            } else if (!/^[A-Za-z]+$/.test(values.lname)) {
                errors.lname = <span style={{ color: 'red' }}>{InsurenceFormConfig.errorMessages.invalidLastname}</span>;
            }
            if (!values.password) {
                errors.password = <span style={{ color: 'red' }}>{InsurenceFormConfig.errorMessages.noPassword}</span>;
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\-])(?=.{8,})/.test(values.password)) {
                errors.password = <span style={{ color: 'red' }}>{InsurenceFormConfig.errorMessages.invalidPassword}</span>
            }
            if (!values.cpassword) {
                errors.cpassword = <span style={{ color: 'red' }}>{InsurenceFormConfig.errorMessages.noConfirmPswd}</span>
            } else if (values.cpassword !== values.password) {
                errors.cpassword = <span style={{ color: 'red' }}>{InsurenceFormConfig.errorMessages.pswdMisMatch}</span>
            }
            if (!values.insurenceCheckbox1 && !values.insurenceCheckbox2) {
                errors.insurenceCheckbox = <span style={{ color: 'red' }}>{InsurenceFormConfig.errorMessages.nocheck}</span>
            }
            return errors;
        },
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);
        }
    });
    return (
        <React.Fragment>
            <div className='header-container'><h1 className="form-heading" type="fixed">GLIC</h1></div>
            <div className='main-grid-container'>
                <div className='form-container'>
                    <form autoComplete="off" onSubmit={formik.handleSubmit} style={{ display: 'grid', width : '20em'}}>
                        {InsurenceFormConfig.inputFields.map((items) =>
                            <TextFieldComponent label={items.label} name={items.name} key={items.id} type={items.type} formik={formik} />
                        )}
                        <br />
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                            {InsurenceFormConfig.gender.map((items) =>
                                <FormControlLabel value={items.value} control={<Radio color="primary" key={items.id + items.value} />} key={items.id} label={items.name} />)}
                        </RadioGroup>
                        <FormGroup row>
                            {InsurenceFormConfig.insurenceType.map((items) =>
                                <FormControlLabel control={<Checkbox onChange={formik.handleChange} name={items.value} key={items.id} />} key={items.id + items.value} label={items.name} />
                            )}
                        </FormGroup>
                        {formik.errors.insurenceCheckbox && formik.touched.insurenceCheckbox && formik.errors.insurenceCheckbox}
                        <br />
                        <button type="submit" disabled={formik.isSubmitting} className="btn-submit">Submit</button>
                    </form>
                </div>
                <div className='details-container'>
                    <p>The simplest Insurance plan that allows you to cut out all the frills and maximize your Insurance Coverage at the most affordable premuims.
                        The easy savings plan focuses on your convenience with comparatively lower premium rates and a pre-defined maturity value.
                        Get both Insurance & Guaranteed Savings at the least possible premiums for the coverage amount.Features and benefits of Guardian Shomriddhi includes:
                        
                        Coverage upto 20 Crore
                        Enjoy guaranted maturity benefits
                        Flexibility at your hands [Terms 5 years to 52 years]
                        Convenient Premium Payment Options [Monthly, Quarterly, Half-Yearly & Yearly]
                        Get Rebate on your Income Tax on Yearly Paid Premiums
                        Loan Facility
                        You can also opt for reduced paidup option for ease of policy continution
                        Enjoy attractive discounts at our partner hospitals & cilinical labs with Guardian Life Card
                        Open you door to a rich network of more than 270 partner Hospitals & Clinical Labs
                        
                        This plan also allows you to avail following add-ons [riders] just for a liitle more premium: These riders are very popular among our customers.
                        Option to avail Additional Accidental Coverage [PDAB/DIAB]
                        Hospitalization Benefits upto 5 Lac for Yourself and every family members [Spouse & Child] individually
                        18 Critical Illness Coverage for self upto 5 Lac. Terms & Conditions of Guardian Shomriddhi:
                        
                        Age: Min. 20 years to Max 65 years. At Maturity age cannot exceed 70 years
                        Loan, Reduced Paidup & Surrender option is also applicabale after successful completion 2 [Two] years tenure of the policy
                        Premiun Convertion Rate:
                        Yearly to Monthly = Yearly Premium X 0.0925
                        Yearly to Quarterly = Yearly Premium X 0.275
                        Yearly to Half Yearly = Yearly Premium X 0.525
                        To enjoy Life Card Facility policy have to remain inforce
                        Minimum Coverage amount is 1 Lac</p>
                        <button onClick = {handleNavigate}>Navigate</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default withRouter(InsurenceForm);