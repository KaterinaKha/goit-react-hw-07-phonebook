import { fetchAllContacts } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  // reducers: {
  //   addContacts: (state, action) => {
  //     state.contacts.push({
  //       name: action.payload.name,
  //       number: action.payload.number,
  //       id: nanoid(),
  //     });
  //   },
  //   delContact: (state, action) => {
  //     state.contacts = state.contacts.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  // },
  extraReducers: builder =>
    builder
      .addCase(fetchAllContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { addContacts, delContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
