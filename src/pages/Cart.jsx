import { useCart } from '../contexts/CartContext';
import { Button, Card } from '../styles/StyledComponents';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const CartContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const CartItem = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 1rem;

  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 4px;
`;

const ProductDetails = styled.div`
  flex: 1;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 576px) {
    justify-content: center;
  }
`;

const Total = styled.div`
  text-align: right;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 2px solid #eee;

  h3 {
    color: var(--primary-color);
  }
`;

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  const handleUpdateQuantity = (productId, currentQuantity, delta) => {
    const newQuantity = currentQuantity + delta;
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    // Aquí iría la lógica de checkout
    toast.success('¡Gracias por tu compra!');
    clearCart();
  };

  return (
    <>
      <Helmet>
        <title>Carrito de Compras - TalentoTech Shop</title>
        <meta name="description" content="Revisa y gestiona los productos en tu carrito de compras" />
      </Helmet>

      <CartContainer>
        <h2 className="mb-4">Carrito de Compras</h2>

        {cart.length === 0 ? (
          <Card>
            <p className="text-center mb-0">Tu carrito está vacío</p>
          </Card>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <ItemInfo>
                  <ProductImage src={item.image} alt={item.name} />
                  <ProductDetails>
                    <h4>{item.name}</h4>
                    <p className="text-muted mb-0">${item.price}</p>
                  </ProductDetails>
                </ItemInfo>

                <QuantityControl>
                  <Button
                    variant="outline"
                    onClick={() => handleUpdateQuantity(item.id, item.quantity, -1)}
                    aria-label="Disminuir cantidad"
                  >
                    <FaMinus />
                  </Button>

                  <span className="fw-bold">{item.quantity}</span>

                  <Button
                    variant="outline"
                    onClick={() => handleUpdateQuantity(item.id, item.quantity, 1)}
                    aria-label="Aumentar cantidad"
                  >
                    <FaPlus />
                  </Button>

                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Eliminar del carrito"
                  >
                    <FaTrash />
                  </Button>
                </QuantityControl>

                <div className="fw-bold ms-3">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </CartItem>
            ))}

            <Total>
              <h3>Total: ${getCartTotal().toFixed(2)}</h3>
              <div className="d-flex gap-2 justify-content-end mt-3">
                <Button
                  variant="outline"
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </Button>
                <Button
                  variant="primary"
                  onClick={handleCheckout}
                >
                  Finalizar Compra
                </Button>
              </div>
            </Total>
          </>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;