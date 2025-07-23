import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import styled from 'styled-components';
import { FaShoppingCart, FaSignOutAlt, FaUser, FaSearch, FaHome, FaBoxOpen } from 'react-icons/fa';
import { Button } from '../styles/StyledComponents';

const Nav = styled.nav`
  background-color: var(--dark-color);
  padding: 1rem 0;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const CartBadge = styled.span`
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  position: absolute;
  top: -8px;
  right: -8px;
  transition: all var(--transition-speed);
  animation: pulse 1.5s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const CartIcon = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform var(--transition-speed);
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  span {
    color: var(--primary-color);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all var(--transition-speed);
  padding: 0.5rem;
  border-radius: var(--border-radius);
  
  &:hover {
    color: var(--secondary-color);
    transform: translateY(-2px);
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  margin-right: 1rem;
`;

  return (
    <Nav>
      <div className="container">
        <NavContainer>
          <Logo to="/">
            <FaBoxOpen /> Talento<span>Tech</span> Shop
          </Logo>
          
          <NavLinks>
            <NavLink to="/">
              <FaHome /> Inicio
            </NavLink>
            <NavLink to="/products">
              <FaBoxOpen /> Productos
            </NavLink>
            
            {user ? (
              <>
                <NavLink to="/cart">
                  <CartIcon>
                    <FaShoppingCart size={20} />
                    {cartItemsCount > 0 && (
                      <CartBadge>{cartItemsCount}</CartBadge>
                    )}
                  </CartIcon>
                </NavLink>
                
                <UserInfo>
                  <FaUser />
                  <span>{user.email}</span>
                </UserInfo>
                
                <Button
                  variant="outline"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt />
                  Salir
                </Button>
              </>
            ) : (
              <Button
                variant="primary"
                onClick={() => navigate('/login')}
              >
                <FaUser /> Iniciar Sesión
              </Button>
            )}
          </NavLinks>
        </NavContainer>
      </div>
    </Nav>
  );
};

export default Navbar;