import Link from 'next/link';
import styles from './ProductDetailCard.module.css';

const ProductDetailCard = ({ product }) => {
  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className={styles.centeredContainer}>
      <div className={styles.productDetail}> {/* Apply the CSS class */}
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.cardImage}
        />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <Link href="/">
          <button className={styles.productDetailsButton}>Back to home</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailCard;
