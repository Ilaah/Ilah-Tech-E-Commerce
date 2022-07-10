import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import CardProduct from './CardProduct'
import InputSearch from './InputSearch'
import './styles/homeScreen.css'

const HomeScreen = () => {

  const products = useSelector(state => state.products)

  return (
    <>
    <InputSearch />
    <div className='cards'>
    {
      products?.map(product => (
        <CardProduct
          key={product.id}
          product={product}
        />
      ))
    }
  </div>
    </>
  )
}

export default HomeScreen