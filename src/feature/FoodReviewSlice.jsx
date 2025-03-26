import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    foodReview: []
}

const foodReviewSlice = createSlice({
    name: 'foodReview',
    initialState: initialState,
    reducers: {
        addReviwe: (state, action) => {
            state.foodReview.push(action.payload);
        },
        editReviwe: (state, action) => {
            const index = state.foodReview.findIndex(item => item.id === action.payload.id);
            state.foodReview[index] = action.payload;
        },
        deleteReviwe: (state, action) => {
            state.foodReview = state.foodReview.filter(item => item.id !== action.payload);
       }
      
    }
})
export const { addReviwe ,deleteReviwe ,editReviwe} = foodReviewSlice.actions
export default foodReviewSlice.reducer