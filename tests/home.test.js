
import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';

// Mock the data that would be passed to the Home component
const mockProducts = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description 1',
    thumbnail: 'thumbnail-url-1',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description 2',
    thumbnail: 'thumbnail-url-2',
  },
];

describe('Home Component', () => {
  it('renders product cards with correct data', () => {
    render(<Home products={mockProducts} />);
    
    // Assert that product titles and descriptions are displayed
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('Description 2')).toBeInTheDocument();
    
  });

  it('contains links to product details pages', () => {
    render(<Home products={mockProducts} />);
    
    // Assert that "Product Details" links are present and have correct href attributes
    const productDetailLinks = screen.getAllByText('Product Details');
    expect(productDetailLinks).toHaveLength(mockProducts.length);
    expect(productDetailLinks[0]).toHaveAttribute('href', '/product/1');
    expect(productDetailLinks[1]).toHaveAttribute('href', '/product/2');
    
  });

 
});
