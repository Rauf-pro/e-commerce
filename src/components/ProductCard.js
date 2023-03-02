import React from 'react'

const ProductCard = ({prd}) => {
  return (
    <div className='w-1/5 h-[350px] border rounded-lg'>
        <img className='h-32' src={prd?.image} alt=''/>
    </div>
  )
}

export default ProductCard