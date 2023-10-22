import ProductCard from '../components/ProductCard';
import { list } from '../consts/consts';
import { useTitle } from '../hooks/useTitle';

const Home = () => {
  useTitle('Home');
  return (
    <main>
        {list.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
    </main>
  )
}

export default Home