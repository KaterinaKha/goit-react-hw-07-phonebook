import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64d64f5b754d3e0f1361ecfe.mockapi.io';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts');
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (name, thunkApi) => {
    try {
      const response = await axios.get('/contacts', { name });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
