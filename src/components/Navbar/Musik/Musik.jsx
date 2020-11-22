import React from 'react'
import s from './Musik.module.css'
import MusikItem from "./MusikItem/MusikItem";

const  Musik = (props) => {

    let musikElement =
        props.state.musik.map( mu => <MusikItem musik={mu.musik} id={mu.id}/>)

    return (
        <div className={s.item}>
            {musikElement}
        </div>
    );
}

export default Musik;