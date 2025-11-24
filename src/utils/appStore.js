import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from './appSlice'
import searchSliceReducer from './searchSlice'

const appStore = configureStore({
    reducer: {
        app: appSliceReducer,
        search:searchSliceReducer
    }
})
export default appStore