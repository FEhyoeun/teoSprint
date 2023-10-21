import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { _mainCol300 } from '../../constants/colors';

export default function TopNavBar() {
  return (
    <NavWrapper>
      <UlWrapper>
        <ListWrapper>
          <Link to="/category">단어장</Link>
        </ListWrapper>
        <ListWrapper>
          <Link to="/album">앨범</Link>
        </ListWrapper>
      </UlWrapper>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
  display: flex;
`;
const UlWrapper = styled.nav`
  display: flex;
`;

const ListWrapper = styled.div`
  width: 10rem;
  height: 3rem;
  background-color: ${_mainCol300};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
`;
