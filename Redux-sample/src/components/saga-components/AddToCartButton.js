import React from 'react';
import { connect } from 'react-redux';
import { addToCartAction } from '../../redux-saga/actions';

let AddToCartButton = ({ addToCartAction }) => (
    <button onClick={addToCartAction}>Add To Cart</button>
)

const mapDispatchToProps = {
    addToCartAction: addToCartAction,
};

AddToCartButton = connect(null, mapDispatchToProps)(AddToCartButton);

export default AddToCartButton;