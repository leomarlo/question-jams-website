// LoadingSpinner.tsx

import React from 'react';

const LoadingSpinner: React.FC = () => (
  <div className="spinner">
    <div className="double-bounce1"></div>
    <div className="double-bounce2"></div>
    <style jsx>{`
      .spinner {
        width: 40px;
        height: 40px;
        position: relative;
        margin: 100px auto;
      }

      .double-bounce1, .double-bounce2 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #333;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        animation: bounce 2.0s infinite ease-in-out;
      }

      .double-bounce2 {
        animation-delay: -1.0s;
      }

      @keyframes bounce {
        0%, 100% { transform: scale(0.0) }
        50% { transform: scale(1.0) }
      }
    `}</style>
  </div>
);

export default LoadingSpinner;
