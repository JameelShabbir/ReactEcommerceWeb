import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React from 'react'
import { Link } from 'react-router-dom';

const auth = getAuth();
const title = 'Forget Your Password';
const btnText = 'Forget Now'

const ForgetPassword = () => {
    // const confirm = confirm('Are you sure you want to reset your password?');
    // if (confirm) {
    const handleReset = async (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;
        console.log('Email:', emailVal);
        sendPasswordResetEmail(auth, emailVal)
            .then(data => {
                console.log(emailVal);
                alert('Check Your Email.');
            })
            .catch(err => {
                console.error('Error:', err);
                alert('Error: ' + err.message);
            });
        // }
    }

    return (
        <>
            <div className="login-section padding-tb section-bg vh-100">
                <div className="container">
                    <div className="account-wrapper">
                        <h3>{title}</h3>
                        <form className="account-form mt-5" onSubmit={(e) => handleReset(e)}>
                            <div className="form-group">
                                <input type="email" name="email" id="email" placeholder='Email address * ' required />
                            </div>

                            <div className="form-group">
                                <button type="submit" className='d-block lab-btn' >
                                    <span>{btnText}</span>
                                </button>
                            </div>
                            <div className="form-group">
                                <div className=''>
                                    <Link to='/login'><small>back to Login</small></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword