
import { render, screen } from '@testing-library/react';
import ProductDetail from '../src/pages/product/[id]';

// Mock the data that would be passed to the ProductDetail component
const mockProduct = {
  id: 1,
  title: 'Product 1',
  description: 'Description 1',
  thumbnail: 'thumbnail-url-1',
};

describe('ProductDetail Component', () => {
  it('renders product details correctly', () => {
    render(<ProductDetail product={mockProduct} />);
    
    // Assert that product title and description are displayed
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    
  });

  it('contains a link to go back to the home page', () => {
    render(<ProductDetail product={mockProduct} />);
    
    // Assert that the "Back to Home" link is present and has the correct href attribute
    const backToHomeLink = screen.getByText('Back to Home');
    expect(backToHomeLink).toBeInTheDocument();
    expect(backToHomeLink).toHaveAttribute('href', '/');
    
  });

});
