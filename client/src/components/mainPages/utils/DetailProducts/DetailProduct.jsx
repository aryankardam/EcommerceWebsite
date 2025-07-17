import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'

const DetailProduct = () => {

  const params = useParams()
  const state = useContext(GlobalState)
  const products = state.ProductAPI.products
  const [detailProduct, setDetailProduct] = useState([])

  useEffect(()=>{
    if(params){
      products.forEach(product =>{
        if(product._id === params.id) setDetailProduct(product)
      })
    }
  },[params,products])

  if(detailProduct.length === 0) return null

  console.log(detailProduct)
  return (
    <div className='detail'>
      {/* <img src={product.images.url} alt='img'/> */}
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FShirts-for-Men-Men-s-Summer-Trendy-Hawaiian-Style-Short-Sleeve-Casual-Shirts-Mens-Graphic-Tees-T-Shirts-for-Men-Big-And-Tall-On-Sales-Navy-4XL_d42231e6-9da7-4ce5-a443-350b515755ee.4eec1f162be59accaa3d207e9800165c.jpeg&f=1&nofb=1&ipt=2116b44dba4be5f82521b5cd4002c6fd540632d69477d3f2dc6bbf268a4ad8b2" alt="img" />
      
      <div className='box-detail'>
        <div className='row'>
            <h2>{detailProduct.title}</h2>
            <h6>{detailProduct.product_id}</h6>
        </div>
        <span>${detailProduct.price}</span> 
        <p>{detailProduct.description}</p> 
        <p>{detailProduct.content}</p>
        <p>Sold:{detailProduct.sold}</p>
        <Link to='/cart' className='cart'>Buy Now</Link>
      </div>
    </div>
  )
}

export default DetailProduct
