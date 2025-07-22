import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--dark-color);
  color: white;
  padding: 3rem 0 1.5rem;
  margin-top: 3rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h4 {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 50px;
      height: 2px;
      background-color: var(--primary-color);
    }
  }
  
  p {
    color: #aaa;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    line-height: 1.6;
  }
`;

const FooterLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: all var(--transition-speed);
  font-size: 0.9rem;
  
  &:hover {
    color: var(--secondary-color);
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transition: all var(--transition-speed);
  
  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-3px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  color: #aaa;
  font-size: 0.9rem;
  
  svg {
    color: var(--secondary-color);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #aaa;
  font-size: 0.9rem;
  
  a {
    color: var(--primary-color);
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterGrid>
          <FooterSection>
            <h4>Sobre Nosotros</h4>
            <p>
              TalentoTech Shop es tu destino para encontrar los mejores productos con precios increíbles. 
              Ofrecemos una experiencia de compra única con envíos rápidos y atención personalizada.
            </p>
            <SocialLinks>
              <SocialIcon href="#" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIcon>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <h4>Enlaces Rápidos</h4>
            <FooterLink to="/">Inicio</FooterLink>
            <FooterLink to="/products">Productos</FooterLink>
            <FooterLink to="/cart">Carrito</FooterLink>
            <FooterLink to="/login">Mi Cuenta</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <h4>Categorías</h4>
            <FooterLink to="/products">Electrónica</FooterLink>
            <FooterLink to="/products">Joyería</FooterLink>
            <FooterLink to="/products">Ropa de Hombre</FooterLink>
            <FooterLink to="/products">Ropa de Mujer</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <h4>Contáctanos</h4>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>Calle Principal #123, Ciudad</span>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <span>+123 456 7890</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span>info@talentotechshop.com</span>
            </ContactItem>
          </FooterSection>
        </FooterGrid>
        
        <Copyright>
          &copy; {new Date().getFullYear()} TalentoTech Shop. Todos los derechos reservados. 
          Hecho con <FaHeart style={{ color: 'var(--primary-color)', margin: '0 5px' }} /> por Cufa.
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;