import React from 'react'
import {addNewsActionCreator, updateNewNewsBodyCreator} from "../../../redux/news-reducer";
import News from "./News";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        addNews: state.newsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onNewNewsChange: (body) => {
            let action = updateNewNewsBodyCreator(body)
            dispatch(action)
        },
        onAddNewsClick: () => {
            dispatch(addNewsActionCreator())
        }
    }
}
const NewsContainer = connect(mapStateToProps, mapDispatchToProps)(News)
export default NewsContainer;