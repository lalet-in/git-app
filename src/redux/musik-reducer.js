const ADD_MUSIK = 'ADD-MUSIK';
const UPDATE_NEW_MUSIK_BODY ='UPDATE-NEW-MUSIK-BODY';


let initialState = {
    musik: [
        {id: 1, musik: 'pum-purum-purum-purum-purum-pum-pum'},
        {id: 2, musik: 'resto presto ruma ruma eeee'}
    ],
    newMusikBody: ""
}

const musikReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MUSIK_BODY:
            state.newMusikBody = action.body;
            return state
        ;
        case ADD_MUSIK:
            let body = state.newMusikBody;
            state.newMusikBody = '';
            state.musik.push({id: 3, musik: body})
            return state
        ;
        default:
            return state;
    }
}

export const addMusikActionCreator = () => ({type: ADD_MUSIK})
export const updateNewMusikBodyCreator = (body) =>
    ({type: UPDATE_NEW_MUSIK_BODY, body: body})

export default musikReducer;