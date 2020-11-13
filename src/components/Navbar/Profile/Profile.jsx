import React from 'react'
import s from './Profile.module.css'

const  Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://luxfon.com/download.php?file=201203/800x600/luxfon.com-4786.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <div className={s.posts}>
                My Posts
                <div className={s.item}>
                    New Post
                </div>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </div>
    );
}

export default Profile;