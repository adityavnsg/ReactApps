export const InsurenceFormConfig = {
    inputFields : [
        {name : 'fname', label: 'First Name', type: 'text', id: 'input1'},
        {name : 'mname', label : 'Middle Name', type: 'text', id: 'input2'},
        {name : 'lname', label : 'Last Name', type: 'text', id:'input3'},
        {name : 'email', label : 'Email', type: 'email', id:'input4'},
        {name : 'password', label : 'Password', type : 'password', id:'input5'},
        {name: 'cpassword', label : 'Confirm Password', type : 'password', id:'input6'}
    ],
    gender : [
        {name : 'Female', value : 'female', id: 'radio1'},
        {name : 'Male', value : 'male', id: 'radio2'},
        {name : 'Others', value : 'others', id: 'radio3'}
    ],
    insurenceType : [
        {name : 'Life Insurence', value : 'insurenceCheckbox1', id: 'checkbox1'},
        {name : 'Vehicle Insurence', value : 'insurenceCheckbox2', id: 'checkbox2'}
    ],
    errorMessages : {
        noEmail : 'Email Required',
        invalidEmail : 'Invalid email address',
        noFirstname : 'Firstname Required',
        invalidFirstname : 'Invalid Firstname',
        noLastname : 'Lastname Required',
        invalidLastname : 'Invalid Lastname',
        noPassword : 'Password Required',
        invalidPassword : 'Password does not matches the criteria. Password should contain atleast one Uppercase, one Lowercase, one Numeric, one Special character and password must contain minimum 8 characters',
        noConfirmPswd : 'Confirm your password once',
        pswdMisMatch : 'Password mis-match',
        nocheck : 'Please check atleast one Insurence'
    }
}