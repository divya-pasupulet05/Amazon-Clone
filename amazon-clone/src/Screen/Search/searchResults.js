import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import productDetail from '../Products/products.json';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const normalized = query.trim().toLowerCase();
  const results = normalized
    ? productDetail.product.filter((item) => item.name.toLowerCase().includes(normalized))
    : [];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '10px' }}>Search results</h1>
      {query ? (
        <>
          <p style={{ color: '#555', marginBottom: '20px' }}>
            Showing {results.length} result{results.length !== 1 ? 's' : ''} for <strong>{query}</strong>.
          </p>
          {results.length > 0 ? (
            <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              {results.map((item) => (
                <div key={item.id} style={{ background: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 5px 18px rgba(0,0,0,0.08)' }}>
                  <div style={{ minHeight: '180px', overflow: 'hidden', background: '#f7f7f7' }}>
                    <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '16px' }}>
                    <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px' }}>{item.name}</div>
                    <div style={{ color: '#444', marginBottom: '12px' }}>₹{item.price}</div>
                    <Link to='/products' style={{ color: '#0f6eb3', fontWeight: 600 }}>View product details</Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', color: '#555' }}>
              No products matched your search.
            </div>
          )}
        </>
      ) : (
        <p style={{ color: '#555' }}>Enter a search term in the navbar to see results.</p>
      )}
      <div style={{ marginTop: '22px' }}>
        <Link to='/' style={{ color: '#0066c0' }}>Back to home</Link>
      </div>
    </div>
  );
};

export default SearchResults;
