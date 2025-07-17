import  React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import ProductList from '../utils/productLists/ProductList'


const Product = () => {
  const state = useContext(GlobalState)
  const products = state.ProductAPI.products
  const [isAdmin] = state.UserAPI.isAdmin

  return (
    <div className='products'>
      {
        products.map(product => {
          return <ProductList key={product._id} product={product} isAdmin={isAdmin} />
        })
      }  
    </div>
  )
}

export default Product
