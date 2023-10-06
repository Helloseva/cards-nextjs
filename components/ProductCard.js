import Link from 'next/link';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img src={product.thumbnail} alt={product.title} className={styles.productImage} />
      <h2>{product.title}</h2>
      <div className={styles.descriptionContainer}>
        <p className={styles.productDescription}>{product.description}</p>
      </div>
      <div className={styles.buttonContainer}>
        <Link href={`/product/${product.id}`}>
          <button className={styles.productDetailsButton}>Product Details</button>
        </Link>
      </div>
    </div>

  );
};

export default ProductCard;
