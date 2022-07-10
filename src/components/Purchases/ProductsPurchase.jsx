import React from 'react'

const ProductsPurchase = ({product}) => {
  return (
    <section className='product-purchases__section'>
        <h4 className='product-purchases__title'>{product.title}</h4>
        <p className='product-purchases__quantity'>{product.productsInCart.quantity}</p>
        <p className='product-purchases__price'>${product.price * product.productsInCart.quantity}</p>
    </section>
  )
}

export default ProductsPurchase