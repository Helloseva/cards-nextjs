import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';

// Define a custom function to simulate a window resize event
const simulateWindowResize = (width) => {
  global.innerWidth = width;
  global.dispatchEvent(new Event('resize'));
};

describe('Home Component', () => {
  it('renders as a column on smaller screens', () => {
    // Render the component initially with a large screen width
    render(<Home products={mockProducts} />);
    
    // Assert that the default layout is used (three cards per row)
    expect(screen.getAllByTestId('product-card')).toHaveLength(3); // Adjust this based on your actual card structure
    
    // Simulate a window resize event to make the screen smaller (e.g., mobile width)
    simulateWindowResize(500); // Adjust the width as needed
    
    // Assert that the component renders as a column on smaller screens
    expect(screen.getAllByTestId('product-card')).toHaveLength(mockProducts.length);
  });

  it('renders as rows on larger screens', () => {
    // Render the component initially with a small screen width
    render(<Home products={mockProducts} />);
    
    // Assert that the component renders as a column on smaller screens
    expect(screen.getAllByTestId('product-card')).toHaveLength(mockProducts.length);
    
    // Simulate a window resize event to make the screen larger (e.g., desktop width)
    simulateWindowResize(1200); // Adjust the width as needed
    
    // Assert that the default layout is used (three cards per row)
    expect(screen.getAllByTestId('product-card')).toHaveLength(3); // Adjust this based on your actual card structure
  });
});
