import React from 'react'
import s from './Frends.module.css'
import FrendsItem from "./FrendsItem/FrendsItem";


const  Frends = (props) => {

    let frendsElement =
        props.state.frends.map( f => <FrendsItem frends={f.frends} id={f.id}/>)

    return (
        <div className={s.item}>
            {frendsElement}
        </div>
    );
}

export default Frends;