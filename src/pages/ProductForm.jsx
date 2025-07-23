import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../utils/api';
import { Form, Input, Button, Card } from '../styles/StyledComponents';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });

  useEffect(() => {
    fetchCategories();
    if (id) {
      fetchProduct();
    }
  }, [id]);

  const fetchCategories = async () => {
    try {
      const data = await api.getCategories();
      setCategories(data);
    } catch (error) {
      toast.error('Error al cargar las categorías');
    }
  };

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const data = await api.getProductById(id);
      setFormData({
        title: data.title,
        description: data.description,
        price: data.price.toString(),
        category: data.category,
        image: data.image
      });
    } catch (error) {
      toast.error('Error al cargar el producto');
      navigate('/products');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.title.trim()) errors.push('El título es requerido');
    if (!formData.description.trim()) errors.push('La descripción es requerida');
    if (!formData.price || formData.price <= 0) errors.push('El precio debe ser mayor a 0');
    if (!formData.category) errors.push('La categoría es requerida');
    if (!formData.image.trim()) errors.push('La URL de la imagen es requerida');
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
      return;
    }

    try {
      setLoading(true);
      const productData = {
        ...formData,
        price: Number(formData.price)
      };

      if (id) {
        await api.updateProduct(id, productData);
        toast.success('Producto actualizado exitosamente');
      } else {
        await api.createProduct(productData);
        toast.success('Producto creado exitosamente');
      }

      navigate('/products');
    } catch (error) {
      toast.error(id ? 'Error al actualizar el producto' : 'Error al crear el producto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{id ? 'Editar' : 'Crear'} Producto - TalentoTech Shop</title>
        <meta name="description" content={`${id ? 'Editar' : 'Crear'} producto en TalentoTech Shop`} />
      </Helmet>

      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Card>
              <h2 className="text-center mb-4">
                {id ? 'Editar' : 'Crear'} Producto
              </h2>
              
              <Form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Título</label>
                  <Input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Título del producto"
                    required
                    aria-label="Título del producto"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Descripción</label>
                  <Input
                    as="textarea"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Descripción del producto"
                    required
                    aria-label="Descripción del producto"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Precio</label>
                  <Input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    required
                    aria-label="Precio del producto"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="category" className="form-label">Categoría</label>
                  <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    aria-label="Categoría del producto"
                  >
                    <option value="">Selecciona una categoría</option>
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="image" className="form-label">URL de la Imagen</label>
                  <Input
                    type="url"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://ejemplo.com/imagen.jpg"
                    required
                    aria-label="URL de la imagen del producto"
                  />
                </div>

                {formData.image && (
                  <div className="mb-3 text-center">
                    <img
                      src={formData.image}
                      alt="Vista previa"
                      style={{ maxWidth: '200px', height: 'auto' }}
                      className="img-thumbnail"
                    />
                  </div>
                )}

                <div className="d-flex gap-2 justify-content-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/products')}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Guardando...
                      </>
                    ) : (
                      id ? 'Actualizar' : 'Crear'
                    )}
                  </Button>
                </div>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductForm;