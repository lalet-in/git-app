const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const TO_FETCH_ACTION = 'TO_FETCH_ACTION';

let initialState = {
    posts: [
        {id: 1, message: 'bonjur', likesCount: 37},
        {id: 2, message: 'hello', likesCount: 73}
    ],
    newPostText: 'send post',
    profile: {
        profilePhotos: {}
    },
    isFetching : false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: {...state.profile,
                    profilePhotos : {...action.profilePhotos}}
            }
        case TO_FETCH_ACTION:
            return {
                ...state,
                isFetching : action.status
            }
        default:
            return state;
    }
}

export const toFetchToggle = (status) => ({type : TO_FETCH_ACTION, status})
export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profilePhotos) => ({type: SET_USER_PROFILE, profilePhotos})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;