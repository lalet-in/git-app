import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import newsReducer from "./news-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'bonjur', likesCount: 37},
                {id: 2, message: 'hello', likesCount: 73}
            ],
            newPostText: 'send post'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimycheb'},
                {id: 2, name: 'Pimych'},
                {id: 3, name: 'Kimych'},
                {id: 4, name: 'Fimych'},
                {id: 5, name: 'Zimych'},
                {id: 6, name: 'Bimych'}
            ],
            messages: [
                {id: 1, message: 'aga'},
                {id: 2, message: 'ugu'},
                {id: 3, message: 'ogo'},
                {id: 4, message: 'yo'},
                {id: 5, message: 'yyyyo'}
            ],
            newMessageBody: ""
        },
        sidebar: {},
        newsPage: {
            news: [
                {id: 1, news: 'wse stanowitsya na swoi mesta'},
                {id: 2, news: 'no ne tak bistro kak hotelos by))'}
            ],
            newNewsBody: ""
        },
        musikPage: {
            musik: [
                {id: 1, musik: 'pum-purum-purum-purum-purum-pum-pum'},
                {id: 2, musik: 'resto presto ruma ruma eeee'}
            ]
        },
        frendsPage: {
            frends: [
                {id: 1, frends: 'Dimych'},
                {id: 2, frends: 'Pimych'},
                {id: 3, frends: 'Zimych'}
            ]
        }
    },
    _callSubscriber() {
        console.log('Start changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._state.newsPage = newsReducer(this._state.newsPage, action);

        this._callSubscriber(this._state);
    }
}




window.state = store;
export default store;