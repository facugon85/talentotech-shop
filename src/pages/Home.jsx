import React from 'react';
import { Helmet } from 'react-helmet';
import MainBanner from '../components/MainBanner';
import FeaturedCategories from '../components/FeaturedCategories';
import { Button } from '../styles/StyledComponents';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaStar, FaShippingFast, FaLock, FaHeadset } from 'react-icons/fa';

const HomeContainer = styled.div`
  padding-bottom: 3rem;
`;

const Section = styled.section`
  margin: 4rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
  color: var(--dark-color);
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2.5rem;
  text-align: center;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all var(--transition-speed);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 1.5rem;
  
  ${FeatureCard}:hover & {
    transform: scale(1.1);
    color: var(--primary-color);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--dark-color);
`;

const FeatureDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.6;
`;

const CTASection = styled.div`
  background-color: var(--secondary-color);
  padding: 4rem 0;
  margin: 4rem 0;
  color: white;
  text-align: center;
  border-radius: var(--border-radius);
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
`;

const features = [
  {
    icon: FaStar,
    title: 'Productos de Calidad',
    description: 'Seleccionamos cuidadosamente cada producto para garantizar la mejor calidad.'
  },
  {
    icon: FaShippingFast,
    title: 'Envío Rápido',
    description: 'Entregamos tus pedidos de forma rápida y segura a cualquier parte del país.'
  },
  {
    icon: FaLock,
    title: 'Pago Seguro',
    description: 'Tus transacciones están protegidas con los más altos estándares de seguridad.'
  },
  {
    icon: FaHeadset,
    title: 'Soporte 24/7',
    description: 'Nuestro equipo de atención al cliente está disponible para ayudarte en todo momento.'
  }
];

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <HomeContainer>
      <Helmet>
        <title>TalentoTech Shop - Tu tienda online</title>
        <meta name="description" content="Descubre productos increíbles a precios especiales en TalentoTech Shop" />
      </Helmet>
      
      <MainBanner />
      
      <div className="container">
        <FeaturedCategories />
        
        <Section>
          <SectionTitle>¿Por qué elegirnos?</SectionTitle>
          <SectionSubtitle>
            En TalentoTech Shop nos esforzamos por ofrecerte la mejor experiencia de compra online
          </SectionSubtitle>
          
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <FeatureIcon>
                  <feature.icon />
                </FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Section>
        
        <CTASection>
          <div className="container">
            <CTATitle>¿Listo para descubrir nuestros productos?</CTATitle>
            <CTADescription>
              Explora nuestra amplia selección de productos y encuentra exactamente lo que estás buscando.
            </CTADescription>
            <Button variant="primary" onClick={() => navigate('/products')}>
              Ver todos los productos <FaArrowRight />
            </Button>
          </div>
        </CTASection>
      </div>
    </HomeContainer>
  );
};

export default Home;