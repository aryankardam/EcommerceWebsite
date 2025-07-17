import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalState } from '../../../../GlobalState'
import BtnRender from '../../products/BtnRender'


const ProductList = ({product,isAdmin}) => {

  return (
    <div className='product_card'>
      {
        isAdmin && <input type='checkbox' checked={product.checked}/>
      }
        {/* <img src={product.images.url} alt='img'/> */}
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fseo%2FShirts-for-Men-Men-s-Summer-Trendy-Hawaiian-Style-Short-Sleeve-Casual-Shirts-Mens-Graphic-Tees-T-Shirts-for-Men-Big-And-Tall-On-Sales-Navy-4XL_d42231e6-9da7-4ce5-a443-350b515755ee.4eec1f162be59accaa3d207e9800165c.jpeg&f=1&nofb=1&ipt=2116b44dba4be5f82521b5cd4002c6fd540632d69477d3f2dc6bbf268a4ad8b2" alt="img" />

        <div className='product_box'>
            <h2 title={product.title}>{product.title}</h2>
            <span>${product.price}</span>
            <p>{product.description}</p>
        </div>

      <BtnRender product={product}/>
    </div>
  )
}

export default ProductList
