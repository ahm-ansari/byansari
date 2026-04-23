import React from 'react';
import './PageLoader.css';

export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-label="Loading page">
      <div className="page-loader__spinner">
        <div className="page-loader__ring" />
        <span className="page-loader__logo">BA</span>
      </div>
    </div>
  );
}
