import React from 'react'
import Layout from '../layout/Layout'
import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/Index/HomePage'
import Product from '../pages/Product/Product'

const PublicRoutes = () => {
  return (
    <Layout>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/products' element={<Product />}/>
        </Routes>
    </Layout>
  )
}

export default PublicRoutes