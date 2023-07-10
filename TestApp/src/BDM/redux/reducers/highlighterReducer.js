import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showComments: true,
  isHighlighted: true,
  commentCount: 0,
};

export const highlighterReducer = createSlice({
  name: "highlighterReducer",
  initialState: initialState,
  reducers: {
    setShowComments: (state, action) => {
      state.showComments = action.payload;
    },
    setIsHighlighted: (state, action) => {
      state.isHighlighted = action.payload;
    },
    setCommentCount: (state, action) => {
      state.commentCount = action.payload;
    },
  },
});

export const { setShowComments, setIsHighlighted, setCommentCount } =
  highlighterReducer.actions;

export default highlighterReducer.reducer;
