import React from 'react';
import {addToCartAction} from '../redux-saga/actions';
import { connect } from 'react-redux';

let AddToCartButton = ({addToCartAction})=>(
    <button onClick={addToCartAction}>Add To Cart</button>
)

const mapDispatchToProps = {
    addToCartAction : addToCartAction,
};

AddToCartButton = connect(null, mapDispatchToProps)(AddToCartButton);

export default AddToCartButton;