import React from 'react'
import s from './../Musik.module.css'
import {NavLink} from "react-router-dom";

const MusikItem = (props) => {
    let path = "/musik/" + props.id;

    return (
        <div className={s.item}>
            <NavLink to={path}>{props.musik}</NavLink>
        </div>
    )
}

export default MusikItem;