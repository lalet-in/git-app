const ADD_NEWS = 'ADD-NEWS';
const UPDATE_NEW_NEWS_BODY = 'UPDATE-NEW-NEWS-BODY';

let initialState = {
    news: [
        {id: 1, news: 'wse stanowitsya na swoi mesta'},
        {id: 2, news: 'no ne tak bistro kak hotelos by))'}
    ],
    newNewsBody: ""
}


const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_NEWS_BODY:
            state.newNewsBody = action.body;
            return state;
        case ADD_NEWS:
            let body = state.newNewsBody;
            state.newNewsBody = '';
            state.news.push({id: 3, news: body})
            return state;
           /* let newNews = {
                id: 3,
                news: body
            };
            state.news.push(newNews);*/
        default:
            return state;
    }
}
export const addNewsActionCreator = () => ({type: ADD_NEWS})
export const updateNewNewsBodyCreator = (body) =>
    ({type: UPDATE_NEW_NEWS_BODY, postNews: body})

export default newsReducer;