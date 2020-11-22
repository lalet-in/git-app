import React from 'react'
import s from './News.module.css'
import NewsItem from "./NewsItem/NewsItemm";

const News = (props) => {

    let newsElement =
        props.state.news.map(n => <NewsItem news={n.news} id={n.id}/>);

    let newNewsElement = React.createRef();
    let addNews = () => {
        let text = newNewsElement.current.value;
        alert(text);
    }

    return (
        <div>
            <div>
                <textarea ref={newNewsElement}></textarea>
                <button onClick={addNews}>Add news</button>
            </div>
            <div className={s.news}>
                {newsElement}
            </div>

        </div>)
}

export default News;