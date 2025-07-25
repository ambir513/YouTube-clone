import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addChat: (state, action) => {
      state.message.push(action.payload);
    },
  },
});
export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
