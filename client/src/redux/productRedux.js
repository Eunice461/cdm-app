import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
	name: "product",
	initialState: {
		isSidebarOpen: false,
	},
	reducers: {
		openSidebar: (state, action) => {
            state.isSidebarOpen = action.payload
        },
        closeSidebar: (state, action) => {
            state.isSidebarOpen = action.payload
        }
	},
});
export const {openSidebar, closeSidebar} = productSlice.actions;
export default productSlice.reducer;
