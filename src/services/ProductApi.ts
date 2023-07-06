import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiCall from "../utility/ApiCall";

export const getProductList = createAsyncThunk('product/list', async () => {
    try {
        const response = await ApiCall.get('products')
        return response.data.map((data: any)=>({
            "productId": data.product_id,
            "name":data.name,
            "shortDescription":data.shortDescription,
            "detailDescription":data.detailDescription,
            "category":data.category,
            "startingPrice":data.startingPrice,
            "bidCloseDate":data.bidCloseDate
        }))
    } catch (error) {
        console.log(error)
    }
})

export const getSellerProductList = createAsyncThunk('products', async (id:any) => {
    try {
        const response = await ApiCall.get('products?seller_id='+id)
        return response.data.map((data: any)=>({
            "productId": data.product_id,
            "name":data.name
        }))
    } catch (error) {
        console.log(error)
    }
})

export const getProductDetail = createAsyncThunk('product/detail', async (product_id:number) => {
    try {
        const response = await ApiCall.get('products?product_id='+product_id)
        return response.data.map((data: any)=>({
            "productId": data.product_id,
            "name":data.name,
            "shortDescription":data.shortDescription,
            "detailDescription":data.detailDescription,
            "category":data.category,
            "startingPrice":data.startingPrice,
            "bidCloseDate":data.bidCloseDate
        }))
    } catch (error) {
        console.log(error)
    }
})