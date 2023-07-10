import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  userDetails: "",
};

export const keycloakReducer = createSlice({
  name: "keycloakReducer",
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
  },
});

export const { setToken, setUserDetails } = keycloakReducer.actions;

export default keycloakReducer.reducer;
