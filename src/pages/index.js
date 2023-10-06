import Link from 'next/link';
import styles from '../../components/ProductCard.module.css';
import { fetchProducts } from '../../utils/api';
import ProductCard from '../../components/ProductCard';

const Home = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  try {
    // Fetch products using the API function
    const products = await fetchProducts();

    return {
      props: { products },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: { products: [] },
    };
  }
}

export default Home;
