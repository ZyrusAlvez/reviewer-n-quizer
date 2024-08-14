import React, { useEffect } from 'react';

const Loading = () => {
  const loadingOverlay = {
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  }

  const loaderStyles = {
    width: '6em',
    height: '6em',
  };

  const ringAStyles = {
    stroke: '#9708F4',
    animation: 'ringA 2s linear infinite',
  };

  const ringBStyles = {
    stroke: '#5E14E4',
    animation: 'ringB 2s linear infinite',
  };

  const ringCStyles = {
    stroke: '#9708F4',
    animation: 'ringC 2s linear infinite',
  };

  const ringDStyles = {
    stroke: '#5E14E4',
    animation: 'ringD 2s linear infinite',
  };

  useEffect(() => {
    const keyframes = `
      @keyframes ringA {
        from, 4% {
          stroke-dasharray: 0 660;
          stroke-width: 20;
          stroke-dashoffset: -330;
        }
        12% {
          stroke-dasharray: 60 600;
          stroke-width: 30;
          stroke-dashoffset: -335;
        }
        32% {
          stroke-dasharray: 60 600;
          stroke-width: 30;
          stroke-dashoffset: -595;
        }
        40%, 54% {
          stroke-dasharray: 0 660;
          stroke-width: 20;
          stroke-dashoffset: -660;
        }
        62% {
          stroke-dasharray: 60 600;
          stroke-width: 30;
          stroke-dashoffset: -665;
        }
        82% {
          stroke-dasharray: 60 600;
          stroke-width: 30;
          stroke-dashoffset: -925;
        }
        90%, to {
          stroke-dasharray: 0 660;
          stroke-width: 20;
          stroke-dashoffset: -990;
        }
      }
      @keyframes ringB {
        from, 12% {
          stroke-dasharray: 0 220;
          stroke-width: 20;
          stroke-dashoffset: -110;
        }
        20% {
          stroke-dasharray: 20 200;
          stroke-width: 30;
          stroke-dashoffset: -115;
        }
        40% {
          stroke-dasharray: 20 200;
          stroke-width: 30;
          stroke-dashoffset: -195;
        }
        48%, 62% {
          stroke-dasharray: 0 220;
          stroke-width: 20;
          stroke-dashoffset: -220;
        }
        70% {
          stroke-dasharray: 20 200;
          stroke-width: 30;
          stroke-dashoffset: -225;
        }
        90% {
          stroke-dasharray: 20 200;
          stroke-width: 30;
          stroke-dashoffset: -305;
        }
        98%, to {
          stroke-dasharray: 0 220;
          stroke-width: 20;
          stroke-dashoffset: -330;
        }
      }
      @keyframes ringC {
        from {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: 0;
        }
        8% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -5;
        }
        28% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -175;
        }
        36%, 58% {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: -220;
        }
        66% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -225;
        }
        86% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -395;
        }
        94%, to {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: -440;
        }
      }
      @keyframes ringD {
        from, 8% {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: 0;
        }
        16% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -5;
        }
        36% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -175;
        }
        44%, 50% {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: -220;
        }
        58% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -225;
        }
        78% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -395;
        }
        86%, to {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: -440;
        }
      }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
  }, []);

  return (
    <div style={loadingOverlay}>
      <svg style={loaderStyles} width="240" height="240" viewBox="0 0 240 240">
        <circle
          style={ringAStyles}
          cx="120"
          cy="120"
          r="105"
          fill="none"
          strokeWidth="20"
          strokeDasharray="0 660"
          strokeDashoffset="-330"
          strokeLinecap="round"
        />
        <circle
          style={ringBStyles}
          cx="120"
          cy="120"
          r="35"
          fill="none"
          strokeWidth="20"
          strokeDasharray="0 220"
          strokeDashoffset="-110"
          strokeLinecap="round"
        />
        <circle
          style={ringCStyles}
          cx="85"
          cy="120"
          r="70"
          fill="none"
          strokeWidth="20"
          strokeDasharray="0 440"
          strokeLinecap="round"
        />
        <circle
          style={ringDStyles}
          cx="155"
          cy="120"
          r="70"
          fill="none"
          strokeWidth="20"
          strokeDasharray="0 440"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default Loading;
