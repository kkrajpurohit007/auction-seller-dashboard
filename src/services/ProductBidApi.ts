import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiCall from "../utility/ApiCall";

export const getBidsByProductId = createAsyncThunk('product/list', async (productId:number) => {
    try {
        const response = await ApiCall.get('bids?product_id='+productId)
        return response.data.map((data: any)=>({
            "amount":data.amount,
            "name":data.name,
            "email":data.email,
            "mobile":data.mobile
        }))
    } catch (error) {
        console.log(error)
    }
})