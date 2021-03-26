import React, { useEffect, useState } from 'react';
import Product from './Product';

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const products = [{ id: 1, name: 'Samsung', category: 'TV', model: 'Samsung Ultra Led 42"', price: 42000 }, { id: 2, name: 'Videocon', category: 'TV', model: 'Videocon Ultra Led 42"', price: 21000 }];
        setProducts(products);
    }, [])

    return (
        <React.Fragment>
            <table style={{marginTop: '30px'}}>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 && products.map((product) =>
                        <tr key={product.id}><Product product={product} /></tr>
                    )}
                </tbody>
            </table>
        </React.Fragment>
    )
}