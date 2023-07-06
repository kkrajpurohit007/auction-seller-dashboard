import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { connect } from 'react-redux'
import { getProductDetail, getProductList, getSellerProductList } from '../../services/ProductApi';
import { AsyncThunkAction, Dispatch, AnyAction } from '@reduxjs/toolkit';
import { getBidsByProductId } from '../../services/ProductBidApi';
import { getSellerDetail } from '../../services/SellerApi';
import { getCategories } from '../../services/CategoryAPi';
import { selectProduct } from '../../redux/productSlice';


export const SellerDashboardHeader = (props:any) => {
    const selectedProduct = useAppSelector((state)=>state.product.selectedProduct)
    const {productList, status} = useAppSelector((state) => state.product)
    const sellerId = useAppSelector((state)=>state.seller.selectedSeller)
    const {seller} = useAppSelector((state)=>state.seller)
    const dispatch = useAppDispatch()
    const [value, setValue] = useState(0);

    const handleChange = (e:any) => {
        setValue(e.target.value);
    };

    const onProductClick = (id:number) => {
        dispatch(getProductDetail(id))
        dispatch(getBidsByProductId(id))
        dispatch(selectProduct(id))
    }

    useEffect(()=>{
        dispatch(getSellerDetail(sellerId))
    },[sellerId])

    useEffect(()=>{
        setValue(selectedProduct)
        onProductClick(selectedProduct)
        dispatch(getSellerProductList(sellerId))
        dispatch(getCategories())
    },[getSellerProductList,selectedProduct])

  return (
    <div className="columns">
        <div className="column is-2">
            <figure className="image is-64x64">
                <img className="image" src={seller?.logoUrl ?? 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Logo_TV_2015.svg'} />
            </figure>
        </div>
        <div className="column is-8 center">
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Product List</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <div className="select">
                                <select value={value} defaultValue={0} onChange={handleChange}  >
                                    <option value="0">Select Product </option>
                                    {productList && productList.map((p)=>{
                                        return(<option key={p.productId} value={p.productId} selected={selectedProduct == p.productId} >{p.name}</option>)
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button className="button is-info" onClick={()=>{onProductClick(value)}} disabled={!value} >Fetch Detail </button>
                </div>
            </div>
        </div>
    </div>
  )
}

SellerDashboardHeader.propTypes = {
//   second: PropTypes.third
}

const mapStateToProps = (state:any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SellerDashboardHeader)

function dispatch(arg0: AsyncThunkAction<any, number, { state?: unknown; dispatch?: Dispatch<AnyAction> | undefined; extra?: unknown; rejectValue?: unknown; serializedErrorType?: unknown; pendingMeta?: unknown; fulfilledMeta?: unknown; rejectedMeta?: unknown; }>) {
    throw new Error('Function not implemented.');
}
