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
            console.log(action.payload);
            let editData = state.foodReview.find((val)=>{
                return(
                    val.id == action.payload.id
                )
            })

       if(editData){
        
        editData.name=action.payload.name
        editData.address=action.payload.address
        editData.postcode=action.payload.postcode
        editData.rating=action.payload.rating
        editData.typeoffood=action.payload.typeoffood

       }
            
        },
        deleteReviwe: (state, action) => {
            state.foodReview = state.foodReview.filter(item => item.id !== action.payload);
       }
      
    }
})
export const { addReviwe ,deleteReviwe ,editReviwe} = foodReviewSlice.actions
export default foodReviewSlice.reducer