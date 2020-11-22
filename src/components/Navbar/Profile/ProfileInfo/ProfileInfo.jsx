import React from 'react'
import s from './ProfileInfo.module.css'

const  ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://luxfon.com/download.php?file=201203/800x600/luxfon.com-4786.jpg' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;