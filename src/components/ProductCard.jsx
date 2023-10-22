import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { add, remove } from '../store/cartSlice';

const ProductCard = ({product}) => {
  const {img, name, price} = product;
  const dispatch = useDispatch();
  const [isInCart, setIsInCart] = useState(false);
  const products = useSelector(state => state.cartState.cartList);

  useEffect(() => {
    const productIsInCart = products.find(item => item.name === name);

    if(productIsInCart) {
      setIsInCart(true);
    }
    else {
      setIsInCart(false);
    }
  }, [products, name]);
  
  return (
    <div className='productCard'>
        <img src={img} alt={name} />
        <p className="name">{name}</p>
        <div className="action">
            <p>${price}</p>
            {isInCart ? (<button className='remove' onClick={() => dispatch(remove(product))}>Remove</button>) : (<button onClick={() => dispatch(add(product))}>Add To Cart</button>)}
        </div>
    </div>
  )
}

export default ProductCard