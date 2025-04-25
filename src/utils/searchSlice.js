import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: [],
  reducers: {
    addSearchVideos: (state, action) => {
      state.push(action.payload);
    },
    removeSearchVideo: (state, action) => {
      return [];
    },
  },
});

export const { addSearchVideos, removeSearchVideo } = searchSlice.actions;
export default searchSlice.reducer;
