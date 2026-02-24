import React from 'react';

const GradientBoxIcon = ({ size = 48, children }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: 'linear-gradient(135deg, rgba(124,90,237,0.2), rgba(91,33,182,0.3))',
        border: '1px solid rgba(124,90,237,0.4)',
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#7C5AED',
        fontSize: size * 0.45,
      }}
    >
      {children}
    </div>
  );
};

export default GradientBoxIcon;
