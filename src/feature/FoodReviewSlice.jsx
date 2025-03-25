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
        }
    }
})
export const { addReviwe } = foodReviewSlice.actions
export default foodReviewSlice.reducer