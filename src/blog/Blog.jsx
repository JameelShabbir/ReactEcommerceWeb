import React from 'react'
import PageHeader from '../components/PageHeader'
import blogList from '../utilis/blogdata.js';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <>
            <PageHeader title='Our Blog Page' currentPage='Blog' />
            <div className="blog-section padding-tb section-bg">
                <div className="container">
                    <div className="section-wrapper">
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 justify-content-center g-4">
                            {
                                blogList.map((blog, i) => (
                                    <div key={i} className="col">
                                        <div className="post-item">
                                            <div className="post-inner">
                                                <div className="post-thumb">
                                                    <Link to={`/blog/${blog.id}`}> <img src={blog.imgUrl} alt={blog.imgAlt} /></Link>
                                                </div>
                                                <div className="post-content">
                                                    <Link to={`/blog/${blog.id}`}><h5>{blog.title}</h5></Link>
                                                    <div className="meta-post">
                                                        <ul className="lab-ul">
                                                            {
                                                                blog.metaList.map((val, i) => (
                                                                    <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                    <p>{blog.desc}</p>
                                                </div>
                                                <div className="post-footer">
                                                    <div className="pf-left">
                                                        <Link to={`/blog/${blog.id}`} className='lab-btn-text'>{blog.btnText}
                                                            <i className="icofont-external-link"></i> </Link>
                                                    </div>
                                                    <div className="pf-right">
                                                        <i class="icofont-speech-comments"></i>
                                                        <span className='comment-count'>{blog.commentCount}</span>
                                                    </div>
                                                </div>
                                            </div>
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

export default Blog