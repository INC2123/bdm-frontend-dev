import { createReducer, createAction } from "@reduxjs/toolkit";

export const setShowComments = createAction("setShowComments");
export const setIsHighlighted = createAction("setIsHighlighted");
export const setCommentCount = createAction("setCommentCount");

const initialState = {
  showComments: true,
  isHighlighted: true,
  commentCount: 0, // New state for comment count
};

const approvalCommentsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setShowComments, (state, action) => {
      state.showComments = action.payload;
    })
    .addCase(setIsHighlighted, (state, action) => {
      state.isHighlighted = action.payload;
    })
    .addCase(setCommentCount, (state, action) => {
      state.commentCount = action.payload;
    });
});

export default approvalCommentsReducer;
