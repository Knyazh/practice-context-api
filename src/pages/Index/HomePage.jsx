import React from 'react'
import './home.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import apiURL from '../../utils/api'
import Card from '../../components/Card/Card'

const HomePage = () => {

  const [products, setProducts]=useState([])

  useEffect(()=>{
    const getProducts= async()=>{
      await axios.get(`${apiURL.productAPI}`)
      .then(response=>setProducts(response.data))
      .catch(err=>console.log(err))
    }

    getProducts()
  },[])
  return (
    <div className='container py-5'>
{
  products && products.map(product=>{
    return(
      <Card data={product} key={product.id}/>
    )
  })
}


    </div>
  )
}

export default HomePage