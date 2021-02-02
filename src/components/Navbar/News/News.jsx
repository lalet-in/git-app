import React from 'react'
import s from './News.module.css'
import NewsItem from "./NewsItem/NewsItemm";


const News = (props) => {

    let state = props.addNews;

    let newsElement = props.addNews.news.map(n =>
        <NewsItem news={n.news} id={n.id}/>);

    let newNewsBody = props.addNews.newNewsBody;

    let onAddNewsClick = () => {
        props.onAddNewsClick();
    }

    let onNewNewsChange = (e) => {
        let body = e.target.value;
        props.onNewNewsChange(body);

    }

    return (
        <div>
            <div>
                <textarea value={newNewsBody}
                          onChange={onNewNewsChange}
                          placeholder={'Enter your news'} />
                <button onClick={onAddNewsClick}>Send</button>
            </div>
            <div className={s.news}>
                {newsElement}
            </div>
        </div>)
}

export default News;