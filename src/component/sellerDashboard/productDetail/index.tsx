import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'
import { getProductDetail } from '../../../services/ProductApi'

const validationSchemaObject = Yup.object({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Product name is required.'),
  shortDescription: Yup.string()
    .max(30, 'Must be 20 characters or less')
    .required('Product short description is required.'),
  detailDescription: Yup.string()
    .min(20, 'Must be 15 characters or less')
    .max(120, 'Must be 20 characters or less')
    .required('Product detail description is required.'),
  category: Yup.number()
    .required('Product category is required.'),
  startingPrice: Yup.number()
    .required('Product bid amount is required.'),
  bidCloseDate: Yup.date()
    .required('Product Bid end date is required.'),
});

export const ProductForm = (props:any) => {
  const {product, status} = useAppSelector((state)=>state.product)
  const categories = useAppSelector((state)=>state.category.dataList)
  const dispatch = useAppDispatch()
  
  const formik = useFormik({
    initialValues: {
      "productId": product?.productId || null,
      "name":product?.name,
      "shortDescription":product?.shortDescription,
      "detailDescription":product?.detailDescription,
      "category":product?.category,
      "startingPrice":product?.startingPrice,
      "bidCloseDate":product?.bidCloseDate?.split("-").reverse().join("-")
    },
    validationSchema: validationSchemaObject,
    onSubmit: values => {
      console.table(values)
    },
    enableReinitialize: true
  });

    return (
      <>    
        <h5>Product Details</h5>
        {status === 'loading' && (
          <div className="box">
            <div className="loader-wrapper">
                <div className="loader is-loading"></div>
            </div>
          </div>
        )}
        {status === 'idle' && (
          <>
            <form onSubmit={formik.handleSubmit}>
            <div className='columns'>
            <div className="column is-8">
              <div className="field is-horizontal">
                <div className="field-label is-normal">
                  <label className="label">Product name</label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className={`input ${formik.touched.name && formik.errors.name ? "is-danger" : ""}`}
                        placeholder="Product Name" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                      />
                    </p>
                    {formik.touched.name && formik.errors.name ? (
                      <p className="help is-danger">{formik.errors.name as string}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className='columns'>
                <div className="column is-8">
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Short Description</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                              <p className="control">
                                <textarea
                                  id="shortDescription"
                                  name="shortDescription"
                                  className={`textarea is-small ${formik.touched.shortDescription && formik.errors.shortDescription ? "is-danger" : ""}`}
                                  placeholder="Short Description" 
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.shortDescription}
                                />
                              </p>
                              {formik.touched.shortDescription && formik.errors.shortDescription ? (
                                <p className="help is-danger">{formik.errors.shortDescription as string}</p>
                              ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='columns'>
                <div className="column is-8">
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Detail Description</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control">
                                  <textarea
                                  id="detailDescription"
                                  name="detailDescription"
                                  className={`textarea is-small ${formik.touched.detailDescription && formik.errors.detailDescription ? "is-danger" : ""}`}
                                  placeholder="Detail Description" 
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.detailDescription}
                                />
                                </p>
                                {formik.touched.detailDescription && formik.errors.detailDescription ? (
                                <p className="help is-danger">{formik.errors.detailDescription as string}</p>
                              ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='columns'>
                <div className="column is-8">
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Category</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                              <p className="control">
                                <select 
                                  id="category"
                                  name="category"
                                  className={`input ${formik.touched.category && formik.errors.category ? "is-danger" : ""}`}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.category}
                                >
                                <option value={0}>Select Category</option>
                                {categories?.map((data: any)=>(<option value={data.categoryId}>{data.name}</option>))}
                                </select>
                              </p>
                              {formik.touched.category && formik.errors.category ? (
                                <p className="help is-danger">{formik.errors.category as string}</p>
                              ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='columns'>
                <div className="column is-8">
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Starting Price</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                              <p className="control">
                                <input
                                  id="startingPrice"
                                  name="startingPrice"
                                  type="text"
                                  className={`input ${formik.touched.startingPrice && formik.errors.startingPrice ? "is-danger" : ""}`}
                                  placeholder="Product starting price" 
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.startingPrice}
                                />
                              </p>
                              {formik.touched.startingPrice && formik.errors.startingPrice ? (
                                <p className="help is-danger">{formik.errors.startingPrice as string}</p>
                              ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='columns'>
                <div className="column is-8">
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Bid End Date</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                              <p className="control">
                                <input
                                  id="bidCloseDate"
                                  name="bidCloseDate"
                                  type="date"
                                  className={`input ${formik.touched.bidCloseDate && formik.errors.bidCloseDate ? "is-danger" : ""}`}
                                  placeholder="Product Bid End Date" 
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.bidCloseDate}
                                />
                              </p>
                              {formik.touched.bidCloseDate && formik.errors.bidCloseDate ? (
                                <p className="help is-danger">{formik.errors.bidCloseDate as string}</p>
                              ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='columns'>
                <div className="column is-8">
                  <div className="field is-horizontal">
                    <div className="field-label is-normal">
                    </div>
                    <div className="control">
                    <button type="submit" className='button is-primary'>Submit</button>
                    </div>
                  </div>
                </div>
            </div>
          </form>
        </>
        )} 
      </>
    )
  
}

ProductForm.propTypes = {
//   second: PropTypes.third
}

const mapStateToProps = (state:any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm)