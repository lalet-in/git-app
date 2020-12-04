import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import newsReducer from "./news-reducer";
import musikReducer from "./musik-reducer";
import frendsReducer from "./frends-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    newsPage: newsReducer,
    musikPage: musikReducer,
    frendsPage: frendsReducer
});

let store = createStore(reducers);


export default store;