import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiCall from "../utility/ApiCall";

export const getSellerDetail = createAsyncThunk('seller', async (id:any) => {
    try {
        const response = await ApiCall.get('sellers?seller_id='+id)
        const data = response.data.map((data: any)=>(
            {
            "sellerId": data.seller_id,
            "name":data.name,
            "sellerType":data.seller_type,
            "logoUrl":data.logo_url
            }
        ))
        return data.length>0? data[0] : {}
    } catch (error) {
        console.log(error)
    }
})

