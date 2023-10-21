import { Link, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { _mainCol300, _mainCol400 } from '../../constants/colors';

export default function TopNavBar() {
  const { bookmark } = useParams();
  return (
    <NavWrapper>
      <UlWrapper>
        <ListWrapper_Category>
          <Link to="/category">단어장</Link>
        </ListWrapper_Category>
        <ListWrapper_Album>
          <Link to="/album">앨범</Link>
        </ListWrapper_Album>
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

const ListWrapper_Category = styled.div`
  width: 10rem;
  height: 3rem;
  background-color: ${_mainCol300};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
`;

const ListWrapper_Album = styled(ListWrapper_Category)`
  background-color: ${_mainCol400};
`;
