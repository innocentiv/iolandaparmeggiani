import React from 'react';

export default function ResponsiveImage({ className, image, alt }) {
  return (
    <span
      className={className}
      style={{
        position: 'relative',
        display: 'inline-block',
        paddingTop: `${100 * image.aspectRatio}%`,
        backgroundImage: `url(${image.base64})`,
        backgroundSize: 'cover'
      }}
    >
      <img 
        alt={alt} 
        src={image.src} 
        style={{
          top: 0,
          width: '100%',
          position: 'absolute',
          display: 'block',
        }}
      />
    </span>
  );
}
