
const initialState = [];

const ContactRedux = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CONTACT':
            return action.payload;
        case 'ADD_CONTACT':
            return [...state, action.payload];
        case 'UPDATE_CONTACT':
            const updateContact = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updateContact;
            return state;
        case 'DELETE_CONTACT':
            const deleteContacts = state.filter(contact => contact.id !== action.payload && contact);
            return deleteContacts;
        default:
            return state;
    }
}

export default ContactRedux;
