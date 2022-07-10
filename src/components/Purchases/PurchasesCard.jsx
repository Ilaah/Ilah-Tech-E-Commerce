import React from 'react'
import ProductsPurchase from './ProductsPurchase'

const PurchasesCard = ({purchase}) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const dateData = new Date(purchase.updatedAt)

  const datePurchase = `${months[dateData.getMonth()]} ${dateData.getDate()}, ${dateData.getFullYear()}`
    
  return (
    <article className='purchases-card'>
        <h3 className='purchases-card__date'> {datePurchase} </h3>
        {
            purchase.cart.products.map(product => (
               <ProductsPurchase 
               key={product.id}
               product={product}
               /> 
            ))
        }
    </article>
  )
}

export default PurchasesCard