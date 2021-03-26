import React from 'react';
import AddToCartButton from './AddToCartButton';

export default function Product(props) {

    const { id, name, model, category, price } = props.product;

    return (
        <React.Fragment>
            <td>{id}</td>
            <td>{name}</td>
            <td>{model}</td>
            <td>{category}</td>
            <td>{price}</td>
            <td><AddToCartButton id={id}/></td>
        </React.Fragment>
    )
}