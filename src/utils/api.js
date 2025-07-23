const API_URL = 'https://fakestoreapi.com';

export const api = {
  // Obtener todos los productos con paginación y búsqueda
  getProducts: async (page = 1, limit = 10, search = '') => {
    try {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) throw new Error('Error al obtener productos');
      let data = await response.json();

      if (search) {
        const searchLower = search.toLowerCase();
        data = data.filter(product =>
          product.title.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.category.toLowerCase().includes(searchLower)
        );
      }

      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedData = data.slice(startIndex, endIndex);

      return {
        items: paginatedData,
        total: data.length
      };
    } catch (error) {
      throw error;
    }
  },

  // Obtener un producto por ID
  getProductById: async (id) => {
    try {
      const response = await fetch(`${API_URL}/products/${id}`);
      if (!response.ok) throw new Error('Producto no encontrado');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Crear un nuevo producto
  createProduct: async (productData) => {
    try {
      const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      if (!response.ok) throw new Error('Error al crear producto');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Actualizar un producto
  updateProduct: async (id, productData) => {
    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      if (!response.ok) throw new Error('Error al actualizar producto');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Eliminar un producto
  deleteProduct: async (id) => {
    try {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al eliminar producto');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Obtener categorías
  getCategories: async () => {
    try {
      const response = await fetch(`${API_URL}/products/categories`);
      if (!response.ok) throw new Error('Error al obtener categorías');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  // Obtener productos por categoría
  getProductsByCategory: async (category) => {
    try {
      const response = await fetch(`${API_URL}/products/category/${category}`);
      if (!response.ok) throw new Error('Error al obtener productos de la categoría');
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
};