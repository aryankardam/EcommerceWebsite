// ProductAPI.jsx
import { useState, useEffect } from 'react'
import axios from 'axios'

const ProductAPI = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get('/api/products')
        setProducts(res.data.products)
        console.log(res.data.products)
      } catch (err) {
        console.error('Failed to fetch products:', err)
      }
    }

    getProducts()
  }, [])

  return {
    products,
    setProducts
  }
}

export default ProductAPI
