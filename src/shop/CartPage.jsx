import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link, useNavigate } from 'react-router-dom';
import delImgUrl from '../assets/images/shop/del.png';
import CheckOut from './CheckOut';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        // fetch cart items from local storage
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCartItems);
    }, [])

    // calculate the total price
    const calculateTotalPrice = (item) => {
        return item.price * item.quantity;
    }


    // handle quantity increase 
    const handleQuantityIncrease = (item) => {
        item.quantity += 1;
        setCartItems([...cartItems])

        // update local storage values with new items 
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }
    // handle decrease 
    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            setCartItems([...cartItems]);
            // update the local Storage 
            localStorage.setItem('cart', JSON.stringify(cartItems))
        }
    }

    // handle item remove from the storage
    const handleRemove = (item) => {
        const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updateCart);

        updateLocalStorage(updateCart);
    }

    // update the local storage
    const updateLocalStorage = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // cart subtotal 
    const cartSubTotal = cartItems.reduce((total, item) => {
        return total + calculateTotalPrice(item)
    }, 0)

    // ordered total items
    const orderTotal = cartSubTotal;

    return (
        <>
            <PageHeader title={'Shop Cart'} currentPage={'Cart page'} />

            <div className="shop-cart padding-tb">
                <div className="container">
                    <div className="section-wrapper">
                        {/* cart top */}
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {

                                        cartItems.map((item, i) => (
                                            <tr key={i}>
                                                <td className='product-item cat-product'>
                                                    <div className="p-thumb">
                                                        <Link to='/shop'><img src={item.img} alt="product image" /></Link>
                                                    </div>
                                                    <div className="p-content">
                                                        <Link to='/shop'>{item.name}</Link>
                                                    </div>
                                                </td>
                                                <td className='cat-price'>${item.price}</td>
                                                <td className='cat-quantity'>
                                                    <div className="cart-plus-minus">
                                                        <div className="dec qtybutton" onClick={() => handleDecrease(item)}>-</div>
                                                        <input type="text" className='cart-plus-minus-box' value={item.quantity} />
                                                        <div className="inc qtybutton" onClick={() => handleQuantityIncrease(item)}>+</div>
                                                    </div>
                                                </td>
                                                <td className='cat-toprice'>${calculateTotalPrice(item)}</td>
                                                <td>
                                                    <a href="#" onClick={() => handleRemove(item)}>
                                                        <img src={delImgUrl} alt="" />
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            {cartItems.length === 0 ?
                                <div className='my-5 py-5 text-center'>
                                    <h2 className='text-center ' style={{ color: 'lightgray' }}>Your cart is Currently  empty
                                        <i class="icofont-cart text-warning fs-1"></i>
                                    </h2>
                                    <p></p>
                                    <button onClick={() => navigate('/shop')} className='btn btn-success'> <i className="icofont-cart"></i> Return To Shop</button>
                                </div>



                                : ''}
                        </div>
                        {/* --------------cart end-------------- */}
                        {/* cart bottom */}
                        <div className="cart-bottom">
                            {/* check out box */}
                            <div className="cart-checkout-box">
                                <form className="coupon" onSubmit={(e) => e.preventDefault()}>
                                    <input className='cart-page-input-text' type="text" name='coupon' id='coupon' required placeholder='Coupon code...' />
                                    <input type="submit" value={'Apply Coupon'} />
                                </form>

                                <form className="cart-checkout">
                                    <input type="submit" onClick={(e) => e.preventDefault() + alert('Your Data Has been updated successfully')} value={'Update Cart'} />
                                    <div>
                                        <CheckOut cartItems={cartItems} />
                                    </div>
                                </form>
                            </div>
                            {/* ====================== end ============= */}

                            {/* shoping box */}
                            <div className="shiping-box">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <form onSubmit={(e) => e.preventDefault()} action='#' className="calculate-shiping">
                                            <h3>Calculate Shipping</h3>
                                            <div className="outline-select">
                                                <select name="country" id="" required>
                                                    <option value="usa">Select Country</option>
                                                    <option value="usa">USA</option>
                                                    <option value="UK">united Kingdom (UK)</option>
                                                    <option value="Pak">Pakistan (92+) </option>
                                                    <option value="BG">Bangladesh</option>
                                                    <option value="ir">Iran</option>
                                                    <option value="ind">India</option>
                                                    <option value="ch">China</option>
                                                </select>
                                                <span className="select-icon">
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <div className="outline-select shipping-select">
                                                <select name="city" id="" required>
                                                    <option value="usa">Select City</option>
                                                    <option value="usa">New York</option>
                                                    <option value="UK">London</option>
                                                    <option value="Pak">Islamabad </option>
                                                    <option value="BG">Malkand </option>
                                                    <option value="ir">Tehran</option>
                                                    <option value="ind">New Delhi</option>
                                                    <option value="ch">Hongkong</option>
                                                </select>
                                                <span className="select-icon">
                                                    <i className="icofont-rounded-down"></i>
                                                </span>
                                            </div>
                                            <input type="number" name='postCode' id='postCode' placeholder='Postcode/Zip *' required className='cart-page-input-text' />
                                            <button type="submit">Update Address</button>
                                        </form>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <div className="cart-overview">
                                            <h3>Cart Totals</h3>
                                            <ul className="lab-ul">
                                                <li>
                                                    <span className='pull-left'>Cart Subtotal</span>
                                                    <p className='pull-right'>${cartSubTotal}</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Shipping and handling</span>
                                                    <p className='pull-right'>Free Shipping</p>
                                                </li>
                                                <li>
                                                    <span className='pull-left'>Order Total</span>
                                                    <p className='pull-right'>${orderTotal.toFixed(2)}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage