import Link from 'next/link';
import styles from '../index.module.css'; // Import the CSS module from the parent directory

const ProductDetail = ({ product }) => {
  return (
    <div className={styles.productCardone}> {/* Apply the CSS class */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.productImage}
      />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <Link href="/">
        <a className={styles.productDetailsButton}>Back to Home</a> {/* Apply the new CSS class */}
      </Link>
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch product IDs from the API
  const response = await fetch('https://dummyjson.com/products');
  const products = await response.json();

  // Generate paths for each product
  const paths = products.products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch the specific product using the ID from the API
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await response.json();

  return {
    props: { product },
  };
}

export default ProductDetail;
