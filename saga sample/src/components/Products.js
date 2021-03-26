import React, { useEffect, useState} from 'react';
import Product from './Product';
import '../styles/products.css';

const Products = ()=>{
    const [products,SetProducts] = useState([]);
    useEffect(()=>{
       let products = [{
            itemId : 1,
            itemName : 'OnePlus',
            model : '6T',
            price : 32000,
            catergory : 'Electronic Goods',
            addToCart : 'button'
        }, {itemId : 2,
            itemName : 'OnePlus',
            model : '7T',
            price : 35000,
            catergory : 'Electronic Goods',
            addToCart : 'button'},
            {itemId : 3,
            itemName : 'OnePlus',
            model : '7',
            price : 38000,
            catergory : 'Electronic Goods',
            addToCart : 'button'},
            {itemId : 4,
            itemName : 'OnePlus',
            model : '7Pro',
            price : 42000,
            catergory : 'Electronic Goods',
            addToCart : 'button'},
            {itemId : 5,
            itemName : 'OnePlus',
            model : '7Pro-Max',
            price : 45000,
            catergory : 'Electronic Goods',
            addToCart : 'button'}
            ];
            SetProducts(products);
    },[])

    return(
        <table className='products-container'>
            <thead>
                <tr><th>S.No</th>
                    <th>Item Name</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th>Catergory</th>
                    <th>Add to cart</th></tr>
            </thead>
            <tbody>
                {products.map((product)=> <Product product={product} key ={product.id}/>)}
            </tbody>
        </table>
    )
}

export default Products;