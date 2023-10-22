import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const CartCard = ({product}) => {
  const {img, name, price} = product;
  const dispatch = useDispatch();

  return (
    <div className="cartCard">
        <img src={img} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={() => dispatch(remove(product))}>Remove</button>
    </div>
  )
}

export default CartCard