import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const desc = `"Introducing our sleek, compact coffee maker—brewing perfection in every cup.
 Effortlessly enjoy barista-quality coffee at home. Elevate your mornings!"`;
const ProductDisplay = ({ item }) => {
    // console.log(item)

    const { name, id, price, seller, ratingsCount, quantity, img } = item;

    const [preQuantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState('');
    const [size, setSize] = useState('Select Size');
    const [color, setColor] = useState('Select Color');

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = {
            id: id,
            img: img,
            name: name,
            price: price,
            quantity: preQuantity,
            size: size,
            color: color,
            coupon: coupon,
        }
        // console.log(product)

        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = existingCart.findIndex((item) => item.id === id);
        if (existingProductIndex !== -1) {
            existingCart[existingProductIndex].quantity += preQuantity;
        } else {
            existingCart.push(product)
        }

        // update the local storage
        localStorage.setItem('cart', JSON.stringify(existingCart));

        // reset from fields
        setQuantity(1);
        setColor('Select Color');
        setSize('Select Size');
        setCoupon('');

    }

    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }
    const handleColorChange = (e) => {
        setColor(e.target.value)
    }
    const handleDecrease = (e) => {
        if (preQuantity > 1) {
            setQuantity(preQuantity - 1)
        }
    }
    const handleIncrease = (e) => {
        setQuantity(preQuantity + 1)
    }

    return (
        <>
            <div>
                <div>
                    <h4>{name}</h4>
                    <p className='rating'>
                        <i className='icofont-star text-warning'></i>
                        <i className='icofont-star text-warning'></i>
                        <i className='icofont-star text-warning'></i>
                        <i className='icofont-star text-warning'></i>
                        <i className='icofont-star text-warning'></i>
                        <span>{ratingsCount}reviews</span>
                    </p>
                    <h4>${price}</h4>
                    <h6>{seller}</h6>
                    <p>{desc}</p>
                </div>
                {/* cart components */}
                <div >
                    <form onSubmit={handleSubmit}>
                        <div className="row d-flex justify-space-between my-3">
                            {/* size  */}
                            <div className="col select-product size" >
                                <select value={size} onChange={handleSizeChange}>
                                    <option >Select Size</option>
                                    <option value="sm">SM</option>
                                    <option value="md">MD</option>
                                    <option value="lg">LG</option>
                                    <option value="xl">XL</option>
                                    <option value="xxl">XXL</option>
                                    <i className='icofont-rounded-down'></i>
                                </select>
                            </div>
                            {/* color */}
                            <div className="col select-product color" >
                                <select value={color} onChange={handleColorChange}>
                                    <option >Select Color</option>
                                    <option value="White">White</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Black">Black</option>
                                    <option value="red">red</option>
                                    <option value="gray">gray</option>
                                    <i className='icofont-rounded-down'></i>
                                </select>
                            </div>
                        </div>

                        <div className="row d-flex justify-space-between">
                            {/* product increment and decrement */}
                            <div className="col">
                                <div className=" row cart-plus-minus border-1 border-secondary rounded">
                                    <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                                    <input className='cart-plus-minus-box' type="text"
                                        value={preQuantity}
                                        onChange={(e) => setQuantity(parseInt(e.target.value, 10))} />
                                    <div className='inc qtybutton' onClick={handleIncrease}>+</div>
                                </div>
                            </div>

                            {/* coupon field */}
                            <div className=" col discount-code mb-2">
                                <input className=' border-1 border-info rounded' type="text" placeholder='Enter Discount code' onChange={(e) => setCoupon(e.target.value)} />
                            </div>

                        </div>

                        {/* button section   */}
                        <div className="row d-flex justify-space-between">
                            <div className="col">
                                <button type='submit' className="lab-btn">
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                            <div className="col">
                                <Link to={`/cart-page`} className="lab-btn bg-info">
                                    <span>Check Out</span>
                                </Link>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default ProductDisplay