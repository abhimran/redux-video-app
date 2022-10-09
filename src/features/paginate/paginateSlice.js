import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageCount: 1,
};

export const paginateSlice = createSlice({
  name: 'paginate',
  initialState,
  reducers: {
    pageClicked: (state, action) => {
      state.pageCount = action.payload;
    },
  },
});

export default paginateSlice.reducer;
export const { pageClicked } = paginateSlice.actions;
