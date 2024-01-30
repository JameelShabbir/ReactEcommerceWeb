import React, { useState } from 'react'
import blogList from '../utilis/blogdata';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

const socialList = [
    {
        link: "#",
        iconName: "icofont-facebook",
        className: "facebook",
    },
    {
        link: "#",
        iconName: "icofont-twitter",
        className: "twitter",
    },
    {
        link: "#",
        iconName: "icofont-linkedin",
        className: "linkedin",
    },
    {
        link: "#",
        iconName: "icofont-instagram",
        className: "instagram",
    },
    {
        link: "#",
        iconName: "icofont-pinterest",
        className: "pinterest",
    },
];
const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams()

    const result = blog.filter((b) => b.id === Number(id));
    // console.log(result)
    return (
        <>
            <PageHeader title={'Single Blog'} currentPage={'Blog / blog details '} />

            <div className="blog-section blog-single padding-tb blog-bg bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img className='rounded' src={item.imgUrl} alt={item.imgAlt} />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h4>{item.title}</h4>
                                                                    <div className="meta-post">
                                                                        <ul className="lab-ul">
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}>
                                                                                        <i className={val.iconName}></i>
                                                                                        {val.text}
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <p> consectetur adipisicing elit. Maxime nam repellat a
                                                                        asperiores ducimus necessitatibus voluptatum veritatis rem saepe eveniet unde aliquam eligendi,
                                                                        ut temporibus harum non eos autem earum officiis esse tempore. ,
                                                                        maxime quae veniam praesentium eum quasi ipsam delectus nostrum quibusdam iste fugit voluptas sed. Qui, saepe rem?
                                                                        Ex, veniam quas et quibusdam provident magni tenetur voluptatem ratione quam soluta facere aliquam, rem totam, nihil
                                                                        vitae molestiae. Numquam ducimus vitae tempora? Nesciunt cum quidem consequuntur quis ut harum ad consectetur laboriosam
                                                                        eveniet asperiores. Dolorum quam, nemo error nulla, inventore facilis itaque pariatur reiciendis voluptates animi nobis
                                                                        rem totam natus officia tempora quia. Sunt eos odio porro non quidem aspernatur fugiat deleniti?

                                                                    </p>
                                                                    <blockquote>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis odit earum necessitatibus temporibus
                                                                            fuga quia saepe ipsa, cupiditate, dolor tempore odio modi recusandae voluptate ad aliquam at unde eveniet.
                                                                        </p>
                                                                        <cite>
                                                                            <a href="#">...JAMEEL ABBAS</a>
                                                                        </cite>
                                                                    </blockquote>
                                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione voluptas maiores soluta nulla blanditiis in qui laudantium perferendis iure quis, saepe veniam totam unde incidunt vitae quia obcaecati accusantium accusamus labore provident odit perspiciatis? Assumenda nam hic sapiente necessitatibus. Ducimus facere quaerat tempora nobis distinctio porro assumenda, autem sint architecto quis magnam quidem in quam natus ad quisquam impedit, voluptates at earum repellendus? Sequi, sint quis. Ex beatae asperiores et similique aspernatur, repellendus neque corporis doloribus laudantium natus, iusto, officia veritatis sequi labore sint. Sed itaque aperiam illum rerum, labore enim a distinctio quasi veniam sequi dignissimos? Aliquid, et consectetur!

                                                                    </p>
                                                                    <img src='/src/assets/images/blog/single/02.jpg' alt="" />
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quibusdam inventore nihil hic expedita sequi fuga soluta eum mollitia ab quas facere fugiat minima aliquid, nostrum quae quisquam voluptatem iure assumenda doloremque molestias quasi, odit consectetur? Dolor cupiditate ratione a laborum provident doloribus praesentium et ab? Amet assumenda, placeat repudiandae pariatur quos quae sit mollitia consequatur! Laboriosam iste praesentium dolore eligendi debitis, incidunt cumque, fuga eius at nisi tenetur eos ipsum itaque vitae perspiciatis perferendis impedit consequuntur voluptas hic, magnam aliquam sit soluta cupiditate aspernatur. Molestias vitae officiis, dicta blanditiis ab velit nihil, quo reprehenderit, illo ex fuga odit ipsum molestiae accusantium earum? Blanditiis illum deleniti voluptatum vero pariatur tenetur, odit exercitationem culpa accusamus minima optio architecto et totam est.
                                                                    </p>
                                                                    <div className="video-thumb">
                                                                        <img src="/src/assets/images/blog/single/03.jpg" alt="" />
                                                                        <img src="https://www.youtube.com/watch?v=FKtw0dEb9wA&ab_channel=Codevolution" alt="" />
                                                                        <a href="https://www.youtube.com/watch?v=FKtw0dEb9wA&ab_channel=Codevolution" target='_blank' className='video-button popup'>
                                                                            <i className="icofont-ui-play"></i>
                                                                        </a>
                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptates. Aliquam voluptas voluptates id. Amet nulla corporis minima, dicta dolorem est perspiciatis error reprehenderit provident quasi aspernatur. Necessitatibus tempora reprehenderit mollitia, ipsam ratione sed ducimus tenetur dignissimos vero neque vel animi voluptatum ut, saepe quae excepturi quibusdam voluptates delectus nemo eaque est qui cum maiores odit. Sit maxime alias quisquam?</p>
                                                                    <div className="tags-section">
                                                                        <ul className="tags lab-ul">
                                                                            <li>
                                                                                <a href="#">Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Personal</a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="lab-ul social-icons">
                                                                            {
                                                                                socialList.map((val, i) => (
                                                                                    <li key={i} >
                                                                                        <a href="#" className={val.className}> <i className={val.iconName}></i></a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        {/* navigaiton part ========== */}
                                        <div className="navigations-part">
                                            <div className="left">
                                                <a href="#" className='prev'>
                                                    <i className="icofont-double-left"></i> Previous Blog
                                                </a>
                                                <a href="#">
                                                    Evisculate Parallel Processes via Technica Sound Models Authoritative.
                                                </a>
                                            </div>
                                            <div className="right">
                                                <a href="#" className='prev'>
                                                    Next Blog   <i className="icofont-double-right"></i>
                                                </a>
                                                <a href="#">
                                                    Evisculate Parallel Processes via Technica Sound Models Authoritative.
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Tags />
                                <PopularPost />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog