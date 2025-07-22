import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaTshirt, FaGem, FaLaptop, FaFemale } from 'react-icons/fa';

const CategoriesContainer = styled.section`
  margin: 3rem 0;
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

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
`;

const CategoryCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all var(--transition-speed);
  cursor: pointer;
  position: relative;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  text-align: center;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: ${props => props.accentColor};
  }
`;

const CategoryIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${props => props.color};
  transition: transform var(--transition-speed);
  
  ${CategoryCard}:hover & {
    transform: scale(1.2);
  }
`;

const CategoryName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--dark-color);
`;

const CategoryDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const categories = [
  {
    id: 'electronics',
    name: 'Electrónica',
    description: 'Dispositivos y accesorios tecnológicos',
    icon: FaLaptop,
    color: '#4ECDC4'
  },
  {
    id: 'jewelery',
    name: 'Joyería',
    description: 'Joyas y accesorios elegantes',
    icon: FaGem,
    color: '#F9A825'
  },
  {
    id: "men's clothing",
    name: 'Ropa de Hombre',
    description: 'Moda y accesorios para hombres',
    icon: FaTshirt,
    color: '#FF6B6B'
  },
  {
    id: "women's clothing",
    name: 'Ropa de Mujer',
    description: 'Moda y accesorios para mujeres',
    icon: FaFemale,
    color: '#4ECDC4'
  }
];

const FeaturedCategories = () => {
  const navigate = useNavigate();
  
  const handleCategoryClick = (categoryId) => {
    navigate('/products');
    // Aquí se podría implementar la navegación con filtro de categoría
    // Por ejemplo: navigate(`/products?category=${categoryId}`);
  };
  
  return (
    <CategoriesContainer>
      <div className="container">
        <SectionTitle>Categorías Destacadas</SectionTitle>
        <SectionSubtitle>
          Explora nuestras categorías más populares y encuentra exactamente lo que estás buscando
        </SectionSubtitle>
        
        <CategoriesGrid>
          {categories.map((category) => (
            <CategoryCard 
              key={category.id}
              accentColor={category.color}
              onClick={() => handleCategoryClick(category.id)}
            >
              <CategoryIcon color={category.color}>
                <category.icon />
              </CategoryIcon>
              <CategoryName>{category.name}</CategoryName>
              <CategoryDescription>{category.description}</CategoryDescription>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </div>
    </CategoriesContainer>
  );
};

export default FeaturedCategories;