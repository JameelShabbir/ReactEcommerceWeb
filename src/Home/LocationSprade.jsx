import React from 'react'
import { Link } from 'react-router-dom';

const title = 'More Then 60,000 Customers';

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
    {
        imgUrl: '/src/assets/images/clients/05.png',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Pakistan',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/01.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From USA',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
    {
        imgUrl: '/src/assets/images/clients/03.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Singapore',
    },
    {
        imgUrl: '/src/assets/images/clients/02.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'From Australia',
    },
    {
        imgUrl: '/src/assets/images/clients/avater.jpg',
        imgAlt: 'education thumb rajibraj91 rajibraj',
        text: 'Join with Us',
    },
]
const LocationSprade = () => {
    return (
        <>
            <div className="clients-section style-2 padding-tb">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="title">{title}</h2>
                        <p className="desc">{desc}</p>
                    </div>
                    <div className="section-wrapper">
                        <div className="clients">
                            {
                                clientsList.map((val, i) => (
                                    <div key={i} className="client-list">
                                        <Link to='/sign-up' className='client-content'>
                                            <span >{val.text}</span>
                                        </Link>
                                        <div className="client-thumb">
                                            <img src={val.imgUrl} alt="location image" />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocationSprade