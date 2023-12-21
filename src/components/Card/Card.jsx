import React from 'react'
import './card.css'
import { useState } from 'react';
import { MdOutlineDescription } from "react-icons/md";
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

const Card = (props) => {

    const context=useContext(ProductContext)

    
    
    
    const {id, title, description, image } = props.data;
    
    const existProduct=context.product.find(item=> item.id===id)
    
    const [showFullDescription, setShowFullDescription] = useState(false);


    const toggleDescription = () => {
      setShowFullDescription(!showFullDescription);
    };
  return (
    <div className='col-lg-10 mx-auto mb-4'> 
        <div className="product-card ">
            <div className="left">
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
                <div className="product-data">
                    <h6>{title}</h6>
                    <div className='my-auto'>

                    <p onClick={toggleDescription}>
                        <MdOutlineDescription/>
                      {showFullDescription ? description : (description.length > 30 ? `${description.substring(0, 30)}...` : description)}
                    </p>
                    </div>
                </div>
            </div> 
            <div></div>
            <div className="right">
                <button onClick={()=> existProduct=== undefined ? context.addToWishlist({  id:id,
                    image : image,
                    title: title,
                    description: description}) : context.removeFromWishlist(id)}
                     className={existProduct===undefined ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-success'}>{existProduct===undefined ? 'Add to wishlist' : 'Remove from wishlist'}</button>
            </div>
        </div>
    </div>
  )
}

export default Card