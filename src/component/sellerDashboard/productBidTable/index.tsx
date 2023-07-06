import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { connect } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { PaginationComponent } from 'react-data-table-component/dist/src/DataTable/types'
import { getBidsByProductId } from '../../../services/ProductBidApi'

export const ProductBidTable = (props:any) => {
  const data = useAppSelector((state)=>state.bid.dataList)
  const productId = useAppSelector((state)=>state.product.selectedProduct)
  const dispatch = useAppDispatch()

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const columns = [
    {
        name: 'Bid Amount',
        selector: (row:any) => row.amount,
    },
    {
        name: 'Name',
        selector: (row:any) => row.name,
    },
    {
      name: 'Email',
      selector: (row:any) => row.email,
    },
    {
      name: 'Mobile',
      selector: (row:any) => row.mobile,
    }
];

  if (error) {
    return <div>Error: Error in server try later</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
      <h5>Product Bidding List</h5>
      <DataTable
          columns={columns}
          data={data}
          fixedHeader
          fixedHeaderScrollHeight="300px"
        />
      </>
    )
  }
}

ProductBidTable.propTypes = {
//   second: PropTypes.third
}

const mapStateToProps = (state:any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductBidTable)