import './ProductList.css';
import { useState, useEffect } from 'react';
import Product from './Product';

function ProductList() {
    const [products, setProducts] = useState([]);
    function handleClick(id) {
        fetch(`/products/${id}`, { method: 'DELETE' })
            .then(() => getProducts())
            .catch(err => console.log(err));
    }
    function getProducts() {
        fetch('/products')
            .then(doc => doc.json())
            .then(newProducts => setProducts(newProducts))
            .catch(err => console.log(err));
    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <div className='products'>
            {products.map(product => <Product key={product._id} handleClick={handleClick} product={product}></Product>)}
        </div>
    )
}

export default ProductList;