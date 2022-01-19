import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productRedux";

export default configureStore({
	reducer: {
		product: productReducer,
	},
});
