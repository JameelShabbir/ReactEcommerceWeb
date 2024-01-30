import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const title = "Register";
const socialTitle = 'Login with Social Media';
const btnText = "Signup";


const SignUp = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const { signUpWithGmail, createUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/login';

    const handleRegister = () => {
        signUpWithGmail().then((result) => {
            const user = result.user;
            navigate(from, { replace: true })
        }).catch((error) => {
            const errorMsge = error.message;
            setErrorMsg("please provide a valid credentials!")
        })
    }

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const conPassword = form.conPassword.value;
        // console.log(name, email, password, conPassword);
        if (password !== conPassword) {
            setErrorMsg('Password must be same')
        } else {
            setErrorMsg('')
            createUser(email, password).then((userCredentials) => {
                const user = userCredentials.user;
                alert('Account created Successfully!')
                navigate(from, { replace: true })
            }).catch((err) => {
                console.log(err.message);
                alert(`${err.message}`)
            })
        }
    }
    return (
        <>
            <div className="login-section padding-tb section-bg">
                <div className="container">
                    <div className="account-wrapper">
                        <h3>{title}</h3>
                        <form className="account-form" onSubmit={handleSignup}>
                            <div className="form-group">
                                <input type="text" name="name" id="name" placeholder='User Name * ' required />
                            </div> <div className="form-group">
                                <input type="email" name="email" id="email" placeholder='Email address * ' required />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" id="password" placeholder='Password * ' required />
                            </div>
                            <div className="form-group">
                                <input type="password" name="conPassword" id="conPassword" placeholder='Confirm Password * ' required />
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
                                <button type="submit" className='d-block lab-btn'>
                                    <span>{btnText}</span>
                                </button>
                            </div>
                        </form>

                        {/* account bottom */}
                        <div className="account-bottom">
                            <span className='d-block cate pt-10'>
                                I Have an Account! <Link to={'/login'} className='fw-bold text-secondary'>Login</Link>
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

export default SignUp