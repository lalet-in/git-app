import React from 'react'
import {addNewsActionCreator, updateNewNewsBodyCreator} from "../../../redux/news-reducer";
import News from "./News";

const NewsContainer = (props) => {

    let state = props.store.getState().newsPage;

    let onAddNewsClick = () => {
        props.store.dispatch(addNewsActionCreator())
    }

    let onNewNewsChange = (body) => {
        props.store.dispatch(updateNewNewsBodyCreator(body));
    }

    return (
        <News updateNewNewsBody={onNewNewsChange}
              addNews={onAddNewsClick}
              newsPage={state}/>
        )
}

export default NewsContainer;