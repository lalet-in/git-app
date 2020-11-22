import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'bonjur', likesCount: 37},
            {id: 2, message: 'hello yopta', likesCount: 73}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Pimych'},
            {id: 3, name: 'Kimych'},
            {id: 4, name: 'Fimych'},
            {id: 5, name: 'Zimych'}
        ],
        messages: [
            {id: 1, message: 'aga'},
            {id: 2, message: 'ugu'},
            {id: 3, message: 'ogo'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yyyyo'}
        ]
    },
    newsPage: {
        news: [
            {id: 1, news: 'wse stanowitsya na swoi mesta'},
            {id: 2, news: 'no ne tak bistro kak hotelos by))'}
        ]
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
}

export let addPost =(postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;