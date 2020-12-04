const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body})
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;