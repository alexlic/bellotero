import React from 'react';

const MaxWidth = ({ className, children }) => {
  return (
    <div className={`flex flex-col w-full max-w-screen-xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default MaxWidth;
