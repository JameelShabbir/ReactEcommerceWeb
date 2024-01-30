import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { vSchema } from '../Schema/Visa';
import { useFormik } from 'formik';
import { paypal } from '../Schema/Paypal';

const VisaIniValues = {
    cholderName: '',
    cNumber: '',
    expDate: '',
    cvv: '',
};

const PaypalIniValues = {
    email: '',
    name: '',
    extraInfo1: '',
};

const CheckOut = ({ cartItems }) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState('visa');

    const visaFormik = useFormik({
        initialValues: VisaIniValues,
        validationSchema: vSchema,
        onSubmit: (values) => {
            console.log('Visa Form Values:', values);
            handleOrderConfirm();
        },
    });

    const paypalFormik = useFormik({
        initialValues: PaypalIniValues,
        validationSchema: paypal,
        onSubmit: (values) => {
            console.log('Paypal Form Values:', values);
            handleOrderConfirm();
        },
    });

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const location = useLocation();
    const form = location.state?.form?.pathname || '/OrderSuccess';

    const handleOrderConfirm = () => {
        const order = window.confirm('Are you sure you want to order?');
        if (order) {
            localStorage.removeItem('cart');
            navigate(form, { replace: true });
        }
    };


    return (
        <>
            <div className="modalCard">
                <Button disabled={cartItems == 0} onClick={handleShow} variant='primary' className='py-2 text-white fw-bold'>Proceed to Checkout</Button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    animation={false}
                    className='modal fade'
                    centered
                >
                    <div className="modal-dialog">
                        <h5 className='px-3 mb-3 text-center'>Select Your Payment Method</h5>
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="tabs mt-3">
                                    <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                        <li className='nav-item' role='presentation'>
                                            <a href="#visa" className={`nav-link ${activeTab === 'visa' ? 'active' : ''}`}
                                                id='visa-tab'
                                                data-toggle="tab"
                                                role='tab'
                                                aria-controls='visa'
                                                aria-onSelect={activeTab === 'visa'}
                                                onClick={() => handleTabChange('visa')}
                                            ><img src="https://i.pngimg.me/thumb/f/720/comdlpng6953127.jpg"
                                                width='80' alt="" />
                                            </a>
                                        </li>
                                        <li className='nav-item' role='presentation'>
                                            <a href="#paypal" className={`nav-link ${activeTab === 'paypal' ? 'active' : ''}`}
                                                id='paypal-tab'
                                                data-toggle="tab"
                                                role='tab'
                                                aria-controls='paypal'
                                                aria-onSelect={activeTab === 'paypal'}
                                                onClick={() => handleTabChange('paypal')}
                                            ><img src="https://mma.prnewswire.com/media/946166/PayPal_2023_Logo.jpg?p=facebook"
                                                width='80' alt="" />
                                            </a>
                                        </li>
                                    </ul>

                                    {/* tab content */}
                                    <div className="tab-content" id="myTabContent">
                                        {/* visa content */}
                                        <div
                                            className={`tab-pane fade ${activeTab === 'visa' ? 'show active' : ''}`}
                                            id='visa'
                                            role='tabpanel'
                                            aria-labelledby='visa-tab'
                                        >
                                            {/* visa tab content =============================================*/}
                                            <div className="mt-4 mx-4">
                                                <div className="text-center">
                                                    <h5>Credit card</h5>
                                                </div>
                                                <form className="form mt-3" onSubmit={visaFormik.handleSubmit}>
                                                    <div className="inputbox  my-2">
                                                        <input
                                                            type="text"
                                                            name='cholderName'
                                                            id='cholderName'
                                                            className='form-control '
                                                            placeholder='Card Holder Name'
                                                            value={visaFormik.values.cholderName}
                                                            onChange={visaFormik.handleChange}
                                                            onBlur={visaFormik.handleBlur}
                                                        />
                                                    </div>
                                                    {visaFormik.errors.cholderName && visaFormik.touched.cholderName ? (
                                                        <span className="text-danger">{visaFormik.errors.cholderName}</span>
                                                    ) : null}
                                                    <div className="inputbox  my-2">
                                                        <input
                                                            type="number"
                                                            name='cNumber'
                                                            id='cNumber'
                                                            className='form-control '
                                                            placeholder='Card Number'
                                                            value={visaFormik.values.cNumber}
                                                            onChange={visaFormik.handleChange}
                                                            onBlur={visaFormik.handleBlur}
                                                        />
                                                    </div>
                                                    {visaFormik.errors.cNumber && visaFormik.touched.cNumber ? (
                                                        <span className="text-danger">{visaFormik.errors.cNumber}</span>
                                                    ) : null}
                                                    <div className="d-flex flex-row gap-2  my-2">
                                                        <div className="inputbox">
                                                            <input
                                                                type="text"
                                                                name='expDate'
                                                                id='expDate'
                                                                className='form-control '
                                                                placeholder='Expire Date'
                                                                value={visaFormik.values.expDate}
                                                                onChange={visaFormik.handleChange}
                                                                onBlur={visaFormik.handleBlur}
                                                            />
                                                            {visaFormik.errors.expDate && visaFormik.touched.expDate ? (
                                                                <span className="text-danger">{visaFormik.errors.expDate}</span>
                                                            ) : null}
                                                        </div>
                                                        <div className="inputbox ">
                                                            <input
                                                                type="number"
                                                                name='cvv'
                                                                id='cvv'
                                                                className='form-control '
                                                                placeholder='CVV'
                                                                value={visaFormik.values.cvv}
                                                                onChange={visaFormik.handleChange}
                                                                onBlur={visaFormik.handleBlur}
                                                            />
                                                            {visaFormik.errors.cvv && visaFormik.touched.cvv ? (
                                                                <span className="text-danger">{visaFormik.errors.cvv}</span>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    <div className="px-5 text-center my-3">
                                                        <button type='submit' className='btn btn-success btn-block'>
                                                            Order Now
                                                        </button>
                                                    </div>
                                                </form>
                                                <p className='my-2 px-2 p-Disclaimer'>
                                                    <em>Payment Disclaimer: </em> In no event shall payment or partial payment by owner for material or service
                                                </p>
                                            </div>
                                        </div>

                                        {/* paypal content */}
                                        <div
                                            className={`tab-pane fade ${activeTab === 'paypal' ? 'show active' : ''}`}
                                            id='paypal'
                                            role='tabpanel'
                                            aria-labelledby='paypal-tab'
                                        >
                                            {/* Paypal tab content */}
                                            <div className="mt-4 mx-4">
                                                <div className="text-center">
                                                    <h5>Paypal Account Info</h5>
                                                </div>
                                                <form className="form mt-3" onSubmit={paypalFormik.handleSubmit}>
                                                    <div className="inputbox  my-2">
                                                        <input
                                                            type="email"
                                                            name='email'
                                                            id='email'
                                                            className='form-control '
                                                            placeholder='Enter your email address'
                                                            value={paypalFormik.values.email}
                                                            onChange={paypalFormik.handleChange}
                                                            onBlur={paypalFormik.handleBlur}
                                                        />
                                                        {paypalFormik.errors.email && paypalFormik.touched.email ? (
                                                            <span className="text-danger">{paypalFormik.errors.email}</span>
                                                        ) : null}
                                                    </div>
                                                    <div className="inputbox  my-2">
                                                        <input
                                                            type="text"
                                                            name='name'
                                                            id='name'
                                                            className='form-control'
                                                            placeholder='Your name'
                                                            value={paypalFormik.values.name}
                                                            onChange={paypalFormik.handleChange}
                                                            onBlur={paypalFormik.handleBlur}
                                                        />
                                                        {paypalFormik.errors.name && paypalFormik.touched.name ? (
                                                            <span className="text-danger">{paypalFormik.errors.name}</span>
                                                        ) : null}
                                                    </div>

                                                    {/* <div className="d-flex flex-row"> */}
                                                    <div className="inputbox">
                                                        <input
                                                            type="text"
                                                            name='extraInfo1'
                                                            id='extraInfo1'
                                                            className='form-control  '
                                                            placeholder='Extra Information'
                                                            value={paypalFormik.values.extraInfo1}
                                                            onChange={paypalFormik.handleChange}
                                                            onBlur={paypalFormik.handleBlur}
                                                        />
                                                        {paypalFormik.errors.extraInfo1 && paypalFormik.touched.extraInfo1 ? (
                                                            <span className="text-danger">{paypalFormik.errors.extraInfo1}</span>
                                                        ) : null}
                                                    </div>
                                                    {/* </div> */}

                                                    <div className="px-5 my-3 text-center">
                                                        <button type='submit' className='btn btn-success btn-block'>
                                                            Add Paypal
                                                        </button>
                                                    </div>
                                                </form>
                                                <p className='my-2 px-2 p-Disclaimer'>
                                                    <em>Payment Disclaimer: </em> In no event shall payment or partial payment by owner for material or service
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default CheckOut