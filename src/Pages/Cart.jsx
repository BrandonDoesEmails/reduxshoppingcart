import { useSelector } from 'react-redux';
import { useTitle } from '../hooks/useTitle';
import CartCard from "../components/CartCard";

const Cart = () => {
  useTitle('Cart');
  const products = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);


  return (
    <main>
        <div className="cart">
            <h1>Cart Items: {products.length} / ${total}</h1>
            <div className="item-list">
                {products.map((product) => (<CartCard key={product.name} product={product}  />
                ))}
            </div>           
          </div>     
    </main>
  )
}

export default Cart