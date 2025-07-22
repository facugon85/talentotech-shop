import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Form, Input, Button, Card } from '../styles/StyledComponents';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const InfoText = styled.p`
  color: var(--primary-color);
  font-size: 0.9rem;
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login({
        username,
        password
      });
      navigate(from, { replace: true });
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Iniciar Sesión - TalentoTech Shop</title>
        <meta name="description" content="Inicia sesión en TalentoTech Shop para acceder a tu cuenta" />
      </Helmet>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Card>
              <h2 className="text-center mb-4">Iniciar Sesión</h2>
              <Form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Usuario</label>
                  <Input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="johnd"
                    required
                    aria-label="Usuario"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="m38rmF$"
                    required
                    aria-label="Contraseña"
                  />
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={loading}
                  className="w-100"
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Cargando...
                    </>
                  ) : (
                    'Iniciar Sesión'
                  )}
                </Button>

                <InfoText>
                  Credenciales de prueba:<br />
                  Usuario: johnd<br />
                  Contraseña: m38rmF$
                </InfoText>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;