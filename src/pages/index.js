// pages/index.js (formerly page.js)

import Link from 'next/link';
import styles from './index.module.css'; // Import the CSS module

const Home = ({ products }) => {
  return (
    <div className={styles.productList}> {/* Apply the CSS class */}
      {products.map((product) => (
        <div className={styles.productCard} key={product.id}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className={styles.productImage}
          />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <Link href={`/product/${product.id}`}>
            <a className={styles.productDetailsButton}>Product Details</a> {/* Apply the new CSS class */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch('https://dummyjson.com/products');

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    const products = data.products; // Access the "products" array

    // Log the products to inspect the data
    console.log('Fetched products:', products);

    return {
      props: { products },
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      props: { products: [] }, // Provide a default value or handle the error as needed
    };
  }
}

export default Home;
