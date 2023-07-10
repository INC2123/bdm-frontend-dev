import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clauseId : "",
    variantId : "",
    versionId : "",
    templateId: "",
    documentId: ""
}

export const appReducer = createSlice({
    name : 'appReducer',
    initialState : initialState,
    reducers : {
        setClause : (state,action)=>{
            state.clause = action.payload
        },
        setVariant : (state,action) =>{
            state.variant = action.payload;
        },
        setVersion : (state,action) =>{
            state.version = action.payload;
        },
        setTemplate : (state,action) =>{
            state.template = action.payload;
        },
        setDocument : (state,action) =>{
            state.document = action.payload;
        },
    }
});

export const { setClause, setVariant, setVersion, setTemplate, setDocument} = appReducer.actions;

export default appReducer.reducer;