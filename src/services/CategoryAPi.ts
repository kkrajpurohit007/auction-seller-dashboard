import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiCall from "../utility/ApiCall";

export const getCategories = createAsyncThunk('categories', async () => {
    try {
        const response = await ApiCall.get('categories')
        return response.data.map((data: any)=>({
            "categoryId": data.category_id,
            "name":data.name
        }))
    } catch (error) {
        console.log(error)
    }
})

