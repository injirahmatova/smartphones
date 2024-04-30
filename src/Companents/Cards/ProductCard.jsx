import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div>
        <p>{item.images}</p>
        <p>{item.title}</p>
        <p>{item.price}</p>
      </div>
  )
}

export default ProductCard