/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalType: null,
    modalProps: {},
  },
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.modalType = action.payload.modalType;
      state.modalProps = action.payload.modalProps || {};
    },
    closeModal(state) {
      state.isOpen = false;
      state.modalType = null;
      state.modalProps = {};
    },
  },
});
