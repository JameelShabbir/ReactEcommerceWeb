import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from 'swiper/modules';
import ProductDisplay from './ProductDisplay';
import Review from './Review';
import PopularPost from './PopularPost';
import Tags from './Tags';


const SingleProduct = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams()
    // console.log(id)

    useEffect(() => {
        fetch("/src/products.json").then(res => res.json()).then(data => setProduct(data))
    }, [])
    // console.log(product)

    const result = product.filter((p) => p.id === id)
    console.log(result)
    // style the swiper image
    const style = {
        filter: "dorp-shadow(4px 4px 1px #000)",
        WebkitFilter: "drop-shadow(0px 0px 5px orange)",
        transform: "rotateY(180deg)"
    }
    return (
        <>
            <PageHeader title={`Our Shop Single`} currentPage={'shop / Single Product'} />

            <div className="shop-single padding-tb aside-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="product-details">
                                    <div className="row align-items-center">
                                        <div className="col-md-6 col-12">
                                            <div className="product-thumb">
                                                <div className="swiper-container pro-single-top">
                                                    <Swiper
                                                        spaceBetween={30}
                                                        slidesPerView={1}
                                                        loop={'true'}
                                                        autoplay={{
                                                            delay: 4000,
                                                            disableOnInteraction: false,
                                                        }}
                                                        modules={[Autoplay]}
                                                        navigation={{
                                                            prevEl: '.pro-single-prev',
                                                            nextEl: '.pro-single-next',
                                                        }}
                                                        className="mySwiper">
                                                        {
                                                            result.map((val, i) => (
                                                                <> <SwiperSlide key={i}>
                                                                    <div className="single-thumb">
                                                                        <img src={val.img} alt="product image" />
                                                                    </div>
                                                                </SwiperSlide >
                                                                    <SwiperSlide key={i} >
                                                                        <div className="single-thumb">
                                                                            <img style={style} src={val.img} alt="product image" />
                                                                        </div>
                                                                    </SwiperSlide>
                                                                </>
                                                            ))
                                                        }

                                                    </Swiper>
                                                    <div className="pro-single-prev">
                                                        <i className='icofont-rounded-right'></i>
                                                    </div>
                                                    <div className="pro-single-next">
                                                        <i className='icofont-rounded-left'></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            {
                                                result.map((val) => <ProductDisplay key={val.id} item={val} />)
                                            }

                                        </div>
                                    </div>
                                </div>

                                {/* reviews of product */}
                                <div className="review">
                                    <Review />
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="ps-lg-4">
                                <PopularPost />
                                <Tags />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct