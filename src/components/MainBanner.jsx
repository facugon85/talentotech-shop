import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles/StyledComponents';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaShoppingBag } from 'react-icons/fa';

const BannerContainer = styled.div`
  position: relative;
  height: 500px;
  overflow: hidden;
  margin-bottom: 3rem;
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const BannerImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, rgba(45, 49, 55, 0.8), rgba(45, 49, 55, 0.4)), url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: white;
  padding: 2rem 4rem;
  max-width: 600px;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  span {
    color: var(--primary-color);
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const BannerSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ShapeDecoration = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: white;
  clip-path: polygon(0 100%, 100% 100%, 100% 60%, 0 100%);
`;

const MainBanner = () => {
  const navigate = useNavigate();
  
  return (
    <BannerContainer>
      <BannerImage />
      <BannerContent>
        <BannerTitle>
          Descubre Productos <span>Increíbles</span> a Precios Especiales
        </BannerTitle>
        <BannerSubtitle>
          Explora nuestra selección de productos de alta calidad. Desde electrónica hasta joyería, tenemos todo lo que necesitas.
        </BannerSubtitle>
        <ButtonGroup>
          <Button variant="primary" onClick={() => navigate('/products')}>
            <FaShoppingBag /> Comprar Ahora
          </Button>
          <Button variant="outline" onClick={() => navigate('/products')}>
            Ver Categorías <FaArrowRight />
          </Button>
        </ButtonGroup>
      </BannerContent>
      <ShapeDecoration />
    </BannerContainer>
  );
};

export default MainBanner;