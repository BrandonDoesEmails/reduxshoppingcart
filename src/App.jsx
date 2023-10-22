import Header from './components/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import './App.css';
import { Routes, Route } from 'react-router-dom';

 const App = () => {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='cart' element={<Cart  />} />
      </Routes>
    </div>  
  )
}

export default App
