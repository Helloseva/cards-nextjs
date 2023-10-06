import Link from 'next/link';
import ProductDetailCard from '../../../components/ProductDetailCard';
import { fetchProductById, fetchProducts } from '../../../utils/api';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <ProductDetailCard product={product} /> {/* Use the ProductDetailCard component */}
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch product IDs from the API to generate paths
  const products = await fetchProducts();

  // Generate paths for each product
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    // Fetch the specific product using the API function
    const product = await fetchProductById(params.id);

    return {
      props: { product },
    };
  } catch (error) {
    console.error(`Error fetching product with ID ${params.id}:`, error);
    return {
      props: { product: null },
    };
  }
}

export default ProductDetail;
