import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { SELLER_DASHBOARD_TITLE } from '../../app/appConstant'
import ProductBidTable from './productBidTable'
import ProductDetail from './productDetail'
import { SellerDashboardHeader } from './headerBar'
import { useAppDispatch, useAppSelector } from '../../app/hooks'

export const SellerDashboard = (props:any) => {
  const seller = useAppSelector((state)=>state.seller.seller)
  const dispatch = useAppDispatch()
  return (
    <div className="form-container">
    <h1 className="title">
        {seller?.name}
    </h1>
    <div className="card">
        <div className="card-content">
            <div className="content">
                <SellerDashboardHeader />
                <hr />
                <ProductDetail />
                <hr />
                <ProductBidTable />
                <hr />
            </div>
        </div>
    </div>
</div>
  )
}

SellerDashboard.propTypes = {
//   second: PropTypes.third
}

const mapStateToProps = (state:any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SellerDashboard)