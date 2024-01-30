import React, { useState } from 'react'
import Rating from '../components/Rating';

const reviewTitle = "Add a Review";

let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];
const Review = () => {
    const [reviewShow, setReviewShow] = useState(true);

    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? 'RevActive' : 'DescActive'}`}>
                <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Description</li>
                <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Review 4</li>
            </ul>
            {/* desc and review contents */}
            <div className={`review-content ${reviewShow ? 'review-content-show' : 'description-show '}`}>
                <div className="review-showing">
                    <ul className="content lab-ul">
                        {
                            ReviewList.map((review, i) => (
                                <li key={i}>
                                    <div className="post-thumb">
                                        <img src={review.imgUrl} alt={review.imgAlt} />
                                    </div>
                                    <div className="post-content">
                                        <div className="entry-meta">
                                            <div className="posted-on">
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                            <Rating />

                                        </div>
                                        <div className="entry-content">
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                    {/* add review fields */}
                    <div className="client-review">
                        <div className="review-form">
                            <div className="review-title">
                                <h5>{reviewTitle}</h5>
                            </div>
                            <form action="#" className="row" onSubmit={(e) => e.preventDefault()}>
                                <div className="col-md-4 col-12">
                                    <input type="text" id='name' name='name' placeholder='Full Name *' required />
                                </div>
                                <div className="col-md-4 col-12">
                                    <input type="email" id='email' name='email' placeholder='Your Email *' required />
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="rating">
                                        <span className='me-2'> Your Rating </span>
                                        <Rating />
                                    </div>
                                </div>

                                <div className="col-md-12 col-12">
                                    <textarea name="message" required id="message" rows="8" placeholder='Enter Your message here...' ></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className='default-button'>
                                        <span>Submit Review</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* description show */}
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis cupiditate dolore, quae enim perspiciatis doloremque nam pariatur. Dolor eligendi itaque adipisci nam! Nesciunt quibusdam labore, nemo temporibus aut adipisci quia veniam quidem at! Maiores assumenda quos repellat exercitationem, blanditiis aspernatur praesentium enim, dolores vero incidunt explicabo omnis perferendis. Eos quae quidem doloremque architecto sequi deserunt exercitationem vel veniam cumque. Dicta quasi autem, provident aperiam atque ratione totam quod explicabo minus?</p>
                    <div className="post-item">
                        <div className="post-thumb">
                            <img src="/src/assets/images/shop/jameel.png" className='border shadow rounded' width={270} alt="" />
                        </div>
                        <div className="post-content">
                            <ul className="lab-ul">
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, eos.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                                <li>Recusandae corporis id dicta nemo, tempora minima perferendis pariatur fugit molestias illo.</li>
                                <li>sit amet consectetur adipisicing elit. Autem earum quas asperiores!</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, eos.</li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing.</li>
                                <li>Recusandae corporis id dicta nemo, tempora minima perferendis pariatur fugit molestias illo.</li>
                                <li>sit amet consectetur adipisicing elit. Autem earum quas asperiores!</li>
                            </ul>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis cupiditate dolore, quae enim perspiciatis doloremque nam pariatur. Dolor eligendi itaque adipisci nam! Nesciunt quibusdam labore, nemo temporibus aut adipisci quia veniam quidem at! Maiores assumenda quos repellat exercitationem, blanditiis aspernatur praesentium enim, dolores vero incidunt explicabo omnis perferendis. Eos quae quidem doloremque architecto sequi deserunt exercitationem vel veniam cumque. Dicta quasi autem, provident aperiam atque ratione totam quod explicabo minus?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review 