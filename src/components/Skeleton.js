import React from 'react';
import './Skeleton.css'; // Include styles

const Skeleton = ({ width = '100%', height = '1rem', borderRadius = '4px', className = '' }) => {
  return (
    <div
      className={`skeleton-loader ${className}`}
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
};

export default Skeleton;
