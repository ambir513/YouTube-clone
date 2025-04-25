import { createSlice } from "@reduxjs/toolkit";

const searchDataSlice = createSlice({
  name: "searchData",
  initialState: {},
  reducers: {
    addSearchData: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addSearchData } = searchDataSlice.actions;
export default searchDataSlice.reducer;
