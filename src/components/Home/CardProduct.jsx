import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import { useDispatch } from 'react-redux'
import getAllProductsCart from '../../store/slices/cart.slice'
import './styles/cardProduct.css'

const CardProduct = ({ product }) => {

  const navigate = useNavigate()

  const goToProductId = () => navigate(`/product/${product.id}`)

  const dispatch = useDispatch()

  const addCartProduct = e => {
    e.stopPropagation()
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

    const objProduct = {
      id: product.id,
      quantity: 1
    }

    axios.post(URL, objProduct, getConfig())
      .then(res => {
        console.log(res.data)
        dispatch(getAllProductsCart())
      })
      .catch(err => console.log(err.data))
  }

  return (
    <article onClick={goToProductId} className='cardProduct'>
      <div className='cardProduct__img-box'>
        <img
          src={product.productImgs[0]}
          alt="image front"
          className='cardProduct__img'
        />
      </div>
      <div className='cardProduct__info'>
        <h3 className='cardProduct__name'> {product.title} </h3>
        <p>Price</p>
        <h4> ${product.price}</h4>
        <button onClick={addCartProduct} className='cardProduct__btn'>
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </article>
  )
}

export default CardProduct