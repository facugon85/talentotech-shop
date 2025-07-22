import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

  :root {
    --primary-color: #FF6B6B;
    --secondary-color: #4ECDC4;
    --accent-color: #F9A825;
    --dark-color: #2D3137;
    --light-color: #F5F5F5;
    --success-color: #4ECDC4;
    --danger-color: #FF6B6B;
    --warning-color: #F9A825;
    --info-color: #4ECDC4;
    --border-radius: 8px;
    --transition-speed: 0.3s;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--light-color);
    color: var(--dark-color);
    line-height: 1.6;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color var(--transition-speed) ease;
  }

  button {
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    transition: all var(--transition-speed) ease;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-top: 0;
  }
  
  p {
    margin-top: 0;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles;