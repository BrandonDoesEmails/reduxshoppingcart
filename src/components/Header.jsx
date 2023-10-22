import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';

const Header = () => {
  const products = useSelector(state => state.cartState.cartList);

  return (
    <header>
        <Link to='/'>
        <div className='logo'>
            <img src={logo} alt="Shopping Logo" />
            <span>Redux Cart</span>
        </div>
        </Link>
        <nav className='navigation'>
            <NavLink className='link' to='/' end>Home</NavLink>
            <NavLink className='link' to='/cart'>Cart</NavLink>
        </nav>
        <Link to="/cart">
            <p>Cart: {products.length}</p>
        </Link>
    </header>
  )
}

export default Header