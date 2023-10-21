import { Outlet } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      navigate('/category');
    } else {
      navigate('/profile');
    }
  }, [navigate]);

  return (
    <Container>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </Container>
  );
};
