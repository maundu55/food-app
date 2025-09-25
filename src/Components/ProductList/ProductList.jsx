import React, {useContext} from 'react'
import { ShopContext } from '../ShopContext/ShopContext'

const ProductList = () => {
  const {products} = useContext(ShopContext)
  return (
    <div>
      <div className='product-list'>
        <h2>OUR DELICIOUS DISHES</h2>
        <div className='product_display'>
      {
        products.map((product)=>{
          const{ id, image, name, price} = product;
          return (
            <div className='product_card' key={id}>
              <img src={image} alt='' />
              <div className='product-info'>
              <h3>{name}</h3>
              <p>{price}</p>
              </div>
              <button className='cta'>Add to Cart</button>

            </div>
          )
        })
      }
        </div>
      </div>
    </div>
  )
}

export default ProductList