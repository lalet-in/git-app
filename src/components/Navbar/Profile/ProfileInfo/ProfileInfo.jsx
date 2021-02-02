import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";

const  ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src='https://luxfon.com/download.php?file=201203/800x600/luxfon.com-4786.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;