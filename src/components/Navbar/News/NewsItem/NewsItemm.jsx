import React from 'react'
import s from './../News.module.css'
import {NavLink} from "react-router-dom";

const NewsItem = (props) => {
    let path = "/news/" + props.id;

    return (
        <div className={s.item}>
            <NavLink to={path}>{props.news}</NavLink>
        </div>
    )
}

export default NewsItem;