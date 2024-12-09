import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Features/counter/counter-slice";

export default configureStore({
    reducer: {
        counter: counterReducer,
    }
});