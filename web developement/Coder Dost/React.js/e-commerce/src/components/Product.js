import './Product.css';

function Product({ product, handleClick }) {
    return (
        <div className='product' id={product._id}>
            <div className="discount">-{Math.trunc(product.discountPercentage)}%</div>
            <button className="deleteButton" onClick={() => handleClick(product._id)}>X</button>
            <div className="image"><img height="180px" width="220px" src={product.thumbnail} alt='i' /></div>
            <div className="name">{product.title}</div>
            <div className="price">${product.price}</div>
            <div className="original">${product.price + ((product.price * Math.trunc(product.discountPercentage)) / 100)}</div>
            <div className="rating"><img height="20px" width="20px" src="/star.png" alt='' />{product.rating}</div>
            <div className="buy">BUY <sub>+</sub></div>
        </div>
    )
}

export default Product;