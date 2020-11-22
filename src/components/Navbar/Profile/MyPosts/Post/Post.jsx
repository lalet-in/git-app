import React from 'react'
import s from './Post.module.css'

const  Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://greatchat.ru/wp-content/uploads/2018/03/avatarki-dlya-skype1.jpeg'/>
            {props.message}
            <div>
                <span>like </span>
                {props.likesCount}
            </div>
        </div>
    );
}

export default Post;