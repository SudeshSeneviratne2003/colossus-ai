import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const defaultProperties = {
  dark: {
    circle: {
      r: 9,
    },
    mask: {
      cx: '50%',
      cy: '23%',
    },
    svg: {
      transform: 'rotate(40deg)',
    },
    lines: {
      opacity: 0,
    },
  },
  light: {
    circle: {
      r: 5,
    },
    mask: {
      cx: '100%',
      cy: '0%',
    },
    svg: {
      transform: 'rotate(90deg)',
    },
    lines: {
      opacity: 1,
    },
  },
  springConfig: { mass: 4, tension: 250, friction: 35 },
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App defaultProperties={defaultProperties} />
  </StrictMode>
);
