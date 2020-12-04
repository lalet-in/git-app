import React from 'react'
import s from './News.module.css'
import NewsItem from "./NewsItem/NewsItemm";

const News = (props) => {

    let state = props.newsPage;

    let newsElement = props.newsPage.news.map(n =>
        <NewsItem news={n.news} id={n.id}/>);
    let newNewsBody = props.newsPage.newNewsBody;

    let onAddNewsClick = () => {
        props.addNews();
    }

    let onNewNewsChange = (e) => {
        let body = e.target.value;
        props.updateNewNewsBody(body);

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