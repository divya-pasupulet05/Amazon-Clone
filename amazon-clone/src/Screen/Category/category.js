import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Category Not Found</h1>
      <p style={{ color: '#555' }}>This category is not available. Please browse our <Link to='/products' style={{ color: '#0f6eb3' }}>products page</Link> instead.</p>
    </div>
  );
};

export default Category;
