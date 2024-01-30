import React from 'react'

const title = "Our Popular Tags";

const tagsList = [
    {
        link: "#",
        text: "envato",
    },
    {
        link: "#",
        text: "themeforest",
    },
    {
        link: "#",
        text: "codecanyon",
    },
    {
        link: "#",
        text: "videohive",
    },
    {
        link: "#",
        text: "audiojungle",
    },
    {
        link: "#",
        text: "3docean",
    },
    {
        link: "#",
        text: "envato",
    },
    {
        link: "#",
        text: "themeforest",
    },
    {
        link: "#",
        text: "codecanyon",
    },
];

const Tags = () => {
    return (
        <>
            <div className="widget widget-tags">
                <div className="widget-header">
                    <h5>{title}</h5>
                </div>
                <ul className="widget-wrapper">
                    {
                        tagsList.map((tags, i) => (
                            <li key={i}>
                                <a href={tags.link}>{tags.text}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Tags