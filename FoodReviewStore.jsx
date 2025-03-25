import { configureStore } from "@reduxjs/toolkit";
import foodReviews from './src/feature/FoodReviewSlice'
export default configureStore({
    reducer: {
        foodReview: foodReviews
    }
})