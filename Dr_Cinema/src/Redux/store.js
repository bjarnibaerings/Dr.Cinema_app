import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import apiReducer from "../Components/API/apiSlicer"

export default configureStore({
    reducer: {
        api: apiReducer,
    }
});