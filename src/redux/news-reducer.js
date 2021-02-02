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
            return {
                ...state,
                newNewsBody: action.body
            };
        case ADD_NEWS:
            let body = state.newNewsBody;
            return {
                ...state,
                newNewsBody: '',
                news: [...state.news, {id: 3, news: body}]
            };
        default:
            return state;
    }
}
export const addNewsActionCreator = () => ({type: ADD_NEWS})
export const updateNewNewsBodyCreator = (body) =>
    ({type: UPDATE_NEW_NEWS_BODY, body: body})

export default newsReducer;

