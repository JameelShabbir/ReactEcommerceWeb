import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const title = "Login";
const socialTitle = 'Login with Social Media';
const btnText = "Login";

const Login = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const { signUpWithGmail, login } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        login(email, password).then((result) => {
            const user = result.user;
            alert('Now You Are LogIn! ' + user.email)
            navigate(from, { replace: true })
        }).catch((error) => {
            const errorMsge = error.message;
            setErrorMsg("please provide a valid credentials!")
        })
    }


    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            navigate(from, { replace: true })
        }).catch((error) => {
            const errorMsge = error.message;
            setErrorMsg("please provide a valid credentials!")
        })
    }
    return (
        <>
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3>{title}</h3>
                        <form className="account-form" onSubmit={handleLogin}>
                            <div className="form-group">
                                <input type="email" name="email" id="email" placeholder='Email address * ' required />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" id="password" placeholder='Password * ' required />
                            </div>
                            {/* showing message */}
                            {
                                errorMsg && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMsg}
                                    </div>
                                )
                            }
                            <div className="form-group">
                                <div className='d-flex justify-content-between flex-wrap pt-sm-2'>
                                    <div className="checkgroup">
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label htmlFor="remember">Remember me </label>
                                    </div>
                                    <Link to='/forgetPassword'>Forget Password</Link>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className='d-block lab-btn'>
                                    <span>{btnText}</span>
                                </button>
                            </div>
                        </form>

                        {/* account bottom */}
                        <div className="account-bottom">
                            <span className='d-block cate pt-10'>
                                Don't Have an Account! <Link to={'/sign-up'} className='fw-bold text-secondary'>Sign Up</Link>
                            </span>
                            <span className="or">
                                <span>or</span>
                            </span>

                            {/* social login */}
                            <h5 className='subtitle'>{socialTitle}</h5>
                            <ul className="lab-ul social-icons justify-content-center">
                                <li>
                                    <button type='submit' onClick={handleRegister} className="github"><i className="icofont-github"></i></button>
                                </li>
                                <li>
                                    <a href='/' className="facebook"><i className="icofont-facebook"></i></a>
                                </li>
                                <li>
                                    <a href='/' className="twitter"><i className="icofont-twitter"></i></a>
                                </li>
                                <li>
                                    <a href='/' className="linkedin"><i className="icofont-linkedin"></i></a>
                                </li>
                                <li>
                                    <a href='/' className="instagram"><i className="icofont-instagram"></i></a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login