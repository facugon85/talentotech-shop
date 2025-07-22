import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: all var(--transition-speed);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
`;

export const Button = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: var(--border-radius);
  border: none;
  font-weight: 600;
  transition: all var(--transition-speed);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  ${props => props.variant === 'primary' && `
    background-color: var(--primary-color);
    color: white;
    &:hover {
      background-color: #ff5252;
      transform: translateY(-2px);
    }
    &:active {
      transform: translateY(0);
    }
  `}

  ${props => props.variant === 'danger' && `
    background-color: var(--danger-color);
    color: white;
    &:hover {
      background-color: #ff5252;
      transform: translateY(-2px);
    }
    &:active {
      transform: translateY(0);
    }
  `}

  ${props => props.variant === 'outline' && `
    background-color: transparent;
    border: 2px solid var(--secondary-color);
    color: var(--secondary-color);
    &:hover {
      background-color: var(--secondary-color);
      color: white;
      transform: translateY(-2px);
    }
    &:active {
      transform: translateY(0);
    }
  `}
  
  ${props => props.variant === 'accent' && `
    background-color: var(--accent-color);
    color: white;
    &:hover {
      background-color: #e69c1f;
      transform: translateY(-2px);
    }
    &:active {
      transform: translateY(0);
    }
  `}
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius);
  margin-bottom: 1rem;
  font-family: 'Inter', sans-serif;
  transition: all var(--transition-speed);
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
`;

export const ErrorMessage = styled.div`
  color: var(--danger-color);
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const SuccessMessage = styled.div`
  color: var(--success-color);
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const Badge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: ${props => props.color || 'var(--secondary-color)'};
  color: white;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Banner = styled.div`
  background-color: var(--accent-color);
  color: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    position: relative;
    z-index: 2;
  }
  
  p {
    font-size: 1.1rem;
    max-width: 600px;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 2;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    clip-path: polygon(100% 0, 0 0, 100% 100%);
    z-index: 1;
  }
`;

export const CategoryButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.active ? 'var(--secondary-color)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--dark-color)'};
  border: 2px solid ${props => props.active ? 'var(--secondary-color)' : '#e0e0e0'};
  border-radius: var(--border-radius);
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all var(--transition-speed);
  
  &:hover {
    background-color: ${props => props.active ? 'var(--secondary-color)' : 'var(--light-color)'};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 2.8rem;
`;

export const ProductPrice = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0.5rem 0;
`;

export const ProductDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
`;