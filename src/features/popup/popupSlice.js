import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    showPopup: false,
    message : "Updated !!!"

};

export const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        closePopup: (state, action) => {
            state.showPopup = false;

        },
    
        showPopup: (state, action) => {
            state.showPopup = true;
            state.message = action.payload;
        }
    }
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const { closePopup, showPopup } = popupSlice.actions;




export const selectShowPopup = (state) => state.popup.showPopup;
export const selectMessage = (state) => state.popup.message;



export default popupSlice.reducer;
