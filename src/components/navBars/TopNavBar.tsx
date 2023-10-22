import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { _mainCol300, _mainCol400 } from '../../constants/colors';
import { PATH } from '../../constants/path';

export default function TopNavBar() {
  const { bookmark } = useParams();
  return (
    <NavWrapper>
      <UlWrapper>
        <ListWrapper_Category>
          <Link to={`/${PATH.CATEGORIES}`}>단어장</Link>
        </ListWrapper_Category>
        <ListWrapper_Album>
          <Link to={`/${PATH.ALBUM}`}>앨범</Link>
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
  height: 2.5rem;
  background-color: ${_mainCol300};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
`;

const ListWrapper_Album = styled(ListWrapper_Category)`
  background-color: ${_mainCol400};
`;
