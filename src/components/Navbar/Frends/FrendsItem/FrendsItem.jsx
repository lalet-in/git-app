import React from 'react'
import s from './../Frends.module.css'
import {NavLink} from "react-router-dom";

const FrendsItem = (props) => {
    let path = "/frends/" + props.id;

    return (
        <div className={s.item}>
            <NavLink to={path}>{props.frends}</NavLink>
        </div>
    )
}

export default FrendsItem;