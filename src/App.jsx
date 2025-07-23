import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/GlobalStyles';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductForm from './pages/ProductForm';
import Cart from './pages/Cart';
import styled from 'styled-components';

// Importar estilos de Bootstrap y React-Toastify
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  color: var(--dark-color);
  text-align: center;
  padding: 2rem;
`;

const LogoContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
    transition: transform var(--transition-speed);
    
    &:hover {
      transform: rotate(20deg) scale(1.1);
    }
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  max-width: 600px;
`;

// Componente de bienvenida (ya no se usa, reemplazado por Home.jsx)
const Welcome = () => (
  <WelcomeContainer>
    <LogoContainer>
      <img src="/vite.svg" alt="Vite logo" />
      <img src="/src/assets/react.svg" alt="React logo" />
    </LogoContainer>
    <Title>TalentoTech Shop</Title>
    <Subtitle>
      Bienvenido a nuestra tienda online. Encuentra los mejores productos con precios increíbles.
      Navega por nuestras categorías y descubre ofertas exclusivas.
    </Subtitle>
  </WelcomeContainer>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <GlobalStyles />
          <AppContainer>
            <Navbar />
            <MainContent>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                
                <Route path="/products" element={<Products />} />
                
                <Route
                  path="/products/new"
                  element={
                    <PrivateRoute>
                      <ProductForm />
                    </PrivateRoute>
                  }
                />
                
                <Route
                  path="/products/edit/:id"
                  element={
                    <PrivateRoute>
                      <ProductForm />
                    </PrivateRoute>
                  }
                />
                
                <Route
                  path="/cart"
                  element={
                    <PrivateRoute>
                      <Cart />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </MainContent>
            <Footer />
            
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </AppContainer>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;