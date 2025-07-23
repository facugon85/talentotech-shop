import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../utils/api';
import { 
  Card, 
  Button, 
  Input, 
  Grid, 
  Loader, 
  ErrorMessage, 
  Banner, 
  CategoryButton, 
  ProductTitle, 
  ProductPrice, 
  ProductDescription, 
  Badge 
} from '../styles/StyledComponents';
import { FaEdit, FaTrash, FaCartPlus, FaPlus, FaSearch, FaFilter, FaShoppingBag } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const SearchBar = styled.div`
  margin-bottom: 2rem;
  position: relative;
  
  .search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
  }
  
  input {
    padding-left: 2.5rem;
  }
`;

const CategoryFilter = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  
  .page-info {
    background: var(--light-color);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    font-weight: 500;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: contain;
  margin-bottom: 1rem;
  transition: transform var(--transition-speed);
  padding: 1rem;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const ProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const ProductActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--dark-color);
  }
`;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      const data = await api.getCategories();
      setCategories(data);
    } catch (err) {
      console.error('Error al cargar categorías:', err);
    }
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      let data;

      if (selectedCategory) {
        data = await api.getProductsByCategory(selectedCategory);
        data = { items: data, total: data.length };
      } else {
        data = await api.getProducts(page, 10, search);
      }

      setProducts(data.items);
      setTotalPages(Math.ceil(data.total / 10));
    } catch (err) {
      setError('Error al cargar los productos');
      toast.error('Error al cargar los productos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [page, search, selectedCategory]);

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
      try {
        await api.deleteProduct(id);
        toast.success('Producto eliminado exitosamente');
        fetchProducts();
      } catch (error) {
        toast.error('Error al eliminar el producto');
      }
    }
  };

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: product.image
    });
    toast.success('Producto agregado al carrito');
  };

  if (loading) {
    return (
      <Loader>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </Loader>
    );
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <>
      <Helmet>
        <title>Productos - TalentoTech Shop</title>
        <meta name="description" content="Explora nuestra selección de productos" />
      </Helmet>

      <div className="container py-4">
        <Banner>
          <h2>Descubre Nuestros Productos</h2>
          <p>Explora nuestra selección de productos de alta calidad. Encuentra lo que necesitas con precios increíbles.</p>
          {user && (
            <Button
              variant="accent"
              onClick={() => navigate('/products/new')}
            >
              <FaPlus /> Nuevo Producto
            </Button>
          )}
        </Banner>
        
        <PageHeader>
          <h2>Productos</h2>
          {user && (
            <Button
              variant="primary"
              onClick={() => navigate('/products/new')}
            >
              <FaPlus /> Nuevo Producto
            </Button>
          )}
        </PageHeader>

        <SearchBar>
          <FaSearch className="search-icon" />
          <Input
            type="text"
            placeholder="Buscar productos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Buscar productos"
          />
        </SearchBar>
        
        <CategoryFilter>
          <CategoryButton 
            active={selectedCategory === ''} 
            onClick={() => setSelectedCategory('')}
          >
            Todas las categorías
          </CategoryButton>
          {categories.map(category => (
            <CategoryButton 
              key={category} 
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CategoryButton>
          ))}
        </CategoryFilter>

        <Grid>
          {products.map((product) => (
            <Card key={product.id}>
              <ProductImage src={product.image} alt={product.title} />
              
              <ProductHeader>
                <ProductTitle>{product.title}</ProductTitle>
                <Badge>{product.category}</Badge>
              </ProductHeader>
              
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
              
              <ProductActions>
                <Button
                  variant="primary"
                  onClick={() => user ? handleAddToCart(product) : navigate('/login')}
                >
                  {user ? (
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                      <FaCartPlus /> Agregar
                    </span>
                  ) : (
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                      <FaShoppingBag /> Iniciar sesión para comprar
                    </span>
                  )}
                </Button>
                
                {user && (
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button
                      variant="outline"
                      onClick={() => navigate(`/products/edit/${product.id}`)}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      <FaTrash />
                    </Button>
                  </div>
                )}
              </ProductActions>
            </Card>
          ))}
        </Grid>

        <Pagination>
          <Button
            variant="outline"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Anterior
          </Button>
          <span className="page-info">
            Página {page} de {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Siguiente
          </Button>
        </Pagination>
      </div>
    </>
  );
};

export default Products;