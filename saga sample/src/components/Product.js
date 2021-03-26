import React from 'react';
import AddToCartButton from './AddToCartButton';

const Product = (props)=>{

    return(
    <tr>{Object.keys(props.product).map((items)=> items === 'addToCart' ?<td><AddToCartButton key={props.product.id}/></td> : <td key={props.product.id}>{props.product[items]}</td>)}</tr>
    )
}

export default Product;