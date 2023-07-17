import { createSlice, nanoid } from "@reduxjs/toolkit";
import localStorage from "../utils/localStorage";

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: localStorage.load('contacts') ?? contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                localStorage.save('contacts', [...state, action.payload]);
                state.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            localStorage.save(
                'contacts',
                state.filter(contact => contact.id !== action.payload)
            );
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        }
    }
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
