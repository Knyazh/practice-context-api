import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {

    const storedProduct = JSON.parse(localStorage.getItem('products')) || [];

    const [product, setProduct] = useState(storedProduct)

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(product))
    }, [product])

    const addToWishlist = (newProduct) => {
        setProduct(prevData => [...prevData, newProduct])
    }


    const removeFromWishlist = (productId) => {
        setProduct(prevData => prevData.filter(item => item.id !== productId))

    }

    const searchProduct=(value)=>{
        setProduct(prevData => prevData.filter(item=> item.title.toLowerCase().includes(value.toLowerCase())))

    }

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('products')) === null) {
            localStorage.setItem('products', JSON.stringify([]))
        }

    }, [])

    useEffect(()=>{})

    return (
        <ProductContext.Provider value={{ product, addToWishlist, removeFromWishlist, searchProduct  }} >
            {children}
        </ProductContext.Provider>
    )


}