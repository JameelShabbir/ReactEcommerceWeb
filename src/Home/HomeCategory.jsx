import React from 'react'
import { Link } from 'react-router-dom';

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
    {
        imgUrl: 'src/assets/images/category/01.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'DSLR Camera',
    },
    {
        imgUrl: 'src/assets/images/category/02.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Shoes',
    },
    {
        imgUrl: 'src/assets/images/category/03.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Photography',
    },
    {
        imgUrl: 'src/assets/images/category/04.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Formal Dress',
    },
    {
        imgUrl: 'src/assets/images/category/05.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Colorful Bags',
    },
    {
        imgUrl: 'src/assets/images/category/06.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-brand-windows',
        title: 'Home Decor',
    },
]

const HomeCategory = () => {
    return (
        <>
            <p>this is code just for my repo</p>
            <div className="category-section styled-4 padding-tb">
                <div className="container">
                    {/* header section */}
                    <div className="section-header text-center">
                        <span className="subtitle">{subTitle}</span>
                        <h2 className="title">{title}</h2>
                    </div>

                    {/* card section */}
                    <div className="card-wrapper">
                        <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                            {
                                categoryList.map((val, i) => (
                                    <div key={i} className="col">
                                        <Link to='/shop' className='category-item'>
                                            <div className="category-inner p-0 rounded position-relative border border-success">
                                                {/* image thumbnail */}
                                                <div className="">
                                                    <img src={val.imgUrl} alt="card-image rounded" />
                                                </div>
                                                {/* content */}
                                                <div className="category-content d-flex position-absolute bottom-0 start-0 p-2">
                                                    <div className="cate-icon mr-1 ">
                                                        <i className={`${val.iconName}  bg-warning p-2 rounded-circle`}></i>
                                                    </div>
                                                    <Link to='/shop'><h6 className='pl-5'>{val.title}</h6></Link>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>

                        {/* button */}
                        <div className="text-center mt-5">
                            <Link to='/shop' className="lab-btn"><span>{btnText}</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeCategory