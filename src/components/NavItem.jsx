import React, { Profiler, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';
import { AuthContext } from '../context/AuthProvider';


const NavItem = () => {

    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    // auth info
    // const { user, children } = useContext(AuthContext)
    // console.log(user)
    const { user, logOut } = useContext(AuthContext);
    // add event listeners
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    })

    return (
        <>
            <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
                {/* header top start */}
                <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
                    <div className="container">
                        {user ? <div className="d-md-block">
                            <div class="btn-group dropstart">
                                <button
                                    type="button"
                                    class="dropdown-toggle bg-transparent rounded "
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {user.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            height={60}
                                            width={40}
                                            alt="User"
                                            className="user-image rounded-circle"
                                        />
                                    ) : (
                                        <span className='bg-light p-2 fw-bold border rounded-circle fs-5'> {user.email ? user.email.substring(0, 2).toUpperCase() : ""}</span>
                                    )}
                                </button>
                                <ul class="dropdown-menu text-left p-2 shadow">
                                    <div className="p-header text-center">
                                        <div className="d-flex">
                                            <p> {user.photoURL && <img src={user.photoURL} height={60} width={40} alt="User" className="user-image rounded-circle" />}</p>
                                            {user.displayName && <p className='py-1 text-success border-bottom border-3 border-success'>{user.displayName}</p>}
                                        </div>
                                        {user.email ? user.email.split('@')[0] : ''}

                                    </div>
                                    <hr />
                                    <Link className='py-1 bg-light my-1 w-100 fw-bold'><i className='icofont-user mx-2  text-warning'></i>Profile</Link>
                                    <Link className='py-1 bg-light my-1 w-100 fw-bold'><i className='icofont-dashboard mx-2 text-warning'></i>Dashboard</Link>
                                    <Link className='py-1 bg-light my-1 w-100 fw-bold'><i className="icofont-settings-alt mx-2 text-warning"></i>Setting</Link>
                                    <hr />
                                    <button onClick={logOut} className="lab-btn ">
                                        <i className='icofont-logout'></i> <span> Logout</span>
                                    </button>
                                </ul>
                            </div>
                        </div> : ''}
                        <div className={`${user ? ' header-top-area d-none' : ''}`}>
                            <Link to='/signup' className='lab-btn me-3'> <span>Create Account</span> </Link>
                            <Link to='/login'>Log in</Link>
                        </div>
                    </div>
                </div>
                {/* header bottom */}
                <div className="header-bottom">
                    <div className="container">
                        <div className="header-wrapper">
                            {/* logo */}
                            <div className="logo-search-acte">
                                <div className="logo">
                                    <Link to='/'>
                                        <img src={logo} alt="logo image" />
                                    </Link>
                                </div>
                            </div>
                            {/* menu area  */}
                            <div className="menu-area">
                                <div className="menu">
                                    <ul className={`lab-ul ${menuToggle ? 'active' : ''}`}>
                                        <li><Link to='/'>Home</Link></li>
                                        <li><Link to='/shop'>Shop</Link></li>
                                        <li><Link to='/blog'>Blog</Link></li>
                                        <li><Link to='/about'>About</Link></li>
                                        <li><Link to='/contact'>Contact</Link></li>
                                    </ul>
                                </div>
                                {/* login and signup  */}

                                {user ? (
                                    <div className="d-none d-md-block">
                                        <div class="btn-group dropstart">
                                            <button
                                                type="button"
                                                class="dropdown-toggle bg-transparent rounded "
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                {user.photoURL ? (
                                                    <img
                                                        src={user.photoURL}
                                                        height={60}
                                                        width={40}
                                                        alt="User"
                                                        className="user-image rounded-circle"
                                                    />
                                                ) : (
                                                    <span className='bg-light p-2 fw-bold border rounded-circle fs-5'> {user.email ? user.email.substring(0, 2).toUpperCase() : ""}</span>
                                                )}
                                            </button>
                                            <ul class="dropdown-menu text-left p-2 shadow">
                                                <div className="p-header text-center">
                                                    <div className="d-flex">
                                                        <p> {user.photoURL && <img src={user.photoURL} height={60} width={40} alt="User" className="user-image rounded-circle" />}</p>
                                                        {user.displayName && <p className='py-1 text-success border-bottom border-3 border-success'>{user.displayName}</p>}
                                                    </div>
                                                    {user.email ? user.email.split('@')[0] : ''}

                                                </div>
                                                <hr />
                                                <Link className='py-1 bg-light my-1 w-100 fw-bold'><i className='icofont-user mx-2  text-warning'></i>Profile</Link>
                                                <Link className='py-1 bg-light my-1 w-100 fw-bold'><i className='icofont-dashboard mx-2 text-warning'></i>Dashboard</Link>
                                                <Link className='py-1 bg-light my-1 w-100 fw-bold'><i className="icofont-settings-alt mx-2 text-warning"></i>Setting</Link>
                                                <hr />
                                                <button onClick={logOut} className="lab-btn ">
                                                    <i className='icofont-logout'></i> <span> Logout</span>
                                                </button>
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <Link to="/Sign-up" className="lab-btn me-3 d-none d-md-block">
                                            Create Account
                                        </Link>
                                        <Link to="/Login" className="d-none d-md-block">
                                            Log In
                                        </Link>
                                    </>
                                )}
                                {/* menu toggler */}
                                <div onClick={() => setMenuToggle(!menuToggle)} className={` header-bar d-lg-none ${menuToggle ? 'active' : ''}`}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>

                                {/* social toggler */}
                                <div onClick={() => setSocialToggle(!socialToggle)} className="ellepsis-bar d-md-none">
                                    <i className="icofont-info-square"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default NavItem