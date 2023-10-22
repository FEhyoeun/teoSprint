import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { _mainCol300, _mainCol400, _mainTextDark } from '../../constants/colors';
import { PATH } from '../../constants/path';

export default function TopNavBar() {
  return (
    <NavWrapper>
      <UlWrapper>
        <ListWrapper_Category>
          <Link to={`/${PATH.CATEGORIES}`}>단어장</Link>
        </ListWrapper_Category>
        <ListWrapper_Album>
          <Link to={`/${PATH.ALBUM}/동물`}>앨범</Link>
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
  background-color: ${_mainCol300};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
a{
  color: ${_mainTextDark};
  text-decoration: none;
  font-size: larger;
  font-weight: 800;
  padding: 1rem;
&:active{
  color: ${_mainTextDark};
  text-decoration: none;
}}
`;

const ListWrapper_Album = styled(ListWrapper_Category)`
  background-color: ${_mainCol400};
`;
