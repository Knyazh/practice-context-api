import React from 'react'
import './product.css'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'
import Card from '../../components/Card/Card'

const Product = () => {
const context = useContext(ProductContext)
console.log(context.product);

  return (
    <div className='container'>
        {
            context.product.length > 0 ? context.product.map(item => {
              return (
                <Card key={item.id} data={item}/>
              )
            }) : <div className='alert alert-primary w-25 mx-auto mt-5 text-center'>No followings...</div>
        }

    </div>
  )
}

export default Product