import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.css'
import { useContext } from 'react'
import { ProductContext } from '../../context/ProductContext'

const Header = () => {
    const context = useContext(ProductContext)
    return (
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <div className="logo">
                            <Link to='/'>Shop.az</Link>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="search-area">
                           <input onChange={(e)=> context.searchProduct(e.target.value)} type="text" placeholder='Search products...'  className='form-control'/>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <nav>
                            <NavLink to='/'>Ana səhifə</NavLink>
                            <NavLink to='/products'>WishList {context.product.length > 0 ? <sup>{context.product.length}</sup> : null}</NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header