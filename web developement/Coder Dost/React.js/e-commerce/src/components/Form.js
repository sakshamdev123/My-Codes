import { useState } from 'react';
import './Form.css';

function Form() {
    const initialState = {
        title: '',
        description: '',
        price: 0,
        discountPercentage: 0,
        rating: 0,
        brand: '',
        category: '',
        thumbnail: ''
    }
    const [product, setProduct] = useState(initialState);
    function handleChange(e) {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }
    function handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        fetch('/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(() => setProduct(initialState))
            .catch(err => console.log(err));
    }
    return (
        <div className='form'>
        <div className='formName'>
            <p>Title: </p>
            <p>Description: </p>
            <p>Price: </p>
            <p>Discount Percentage: </p>
            <p>Rating: </p>
            <p>Brand: </p>
            <p>Category :</p>
            <p>Thumbnail Link: </p>
        </div>
        <form className='formInput'>
            <input onChange={handleChange} type="text" value={product.title} placeholder='Product Name' name="title" required></input><br></br>
            <input onChange={handleChange} type="text" value={product.description} placeholder='Product Description' name="description"></input><br></br>
            <input onChange={handleChange} type="number" value={product.price} placeholder='Price' name="price" required></input><br></br>
            <input type="number" onChange={handleChange} value={product.discountPercentage} placeholder='Discount' name="discountPercentage"></input><br></br>
            <input onChange={handleChange} type="number" value={product.rating} placeholder='Rating' name="rating"></input><br></br>
            <input onChange={handleChange} type="text" value={product.brand} placeholder='Product Brand' name="brand" required></input><br></br>
            <select onChange={handleChange} name="category" id="category">
                <option value="">Select</option>
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops</option>
            </select><br></br>
            <input onChange={handleChange} type="url" value={product.thumbnail} placeholder='Product Image Link' name="thumbnail" required></input><br></br>
            <button className='submit' onClick={handleClick}>Submit</button>
        </form>
        </div>
    )
}

export default Form;