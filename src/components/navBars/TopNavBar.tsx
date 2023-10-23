import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { _mainCol300, _mainColGreen, _mainTextDark } from '../../constants/colors';
import { PATH } from '../../constants/path';
import Album from '../../assets/album.svg';
import Library from '../../assets/album.svg';

export default function TopNavBar() {
  return (
    <NavWrapper>
      <UlWrapper>
        <ListWrapper_Album>
          <Link to={`/${PATH.ALBUM}/동물`}>
            <TextBox>
              <IconImage src={Album} />
              <Text>앨범</Text>
            </TextBox>
          </Link>
        </ListWrapper_Album>
        <ListWrapper_Category>
          <Link to={`/${PATH.CATEGORIES}`}>
            <TextBox>
              <IconImage src={Library} />
              <Text>단어장</Text>
            </TextBox>
          </Link>
        </ListWrapper_Category>
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
  width: 14rem;
  background-color: ${_mainCol300};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;
  a {
    width: inherit;
    height: inherit;
    padding: 10px 0;
    color: ${_mainTextDark};
    text-decoration: none;
    font-size: larger;
    font-weight: 800;
    text-align: center;
    &:active {
      color: ${_mainTextDark};
      text-decoration: none;
    }
  }
`;

const ListWrapper_Album = styled(ListWrapper_Category)`
  background-color: ${_mainColGreen};
`;

const TextBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  &:hover {
    scale: 1.1;
  }
`;

const IconImage = styled.img`
  width: 40px;
`;
const Text = styled.span`
  font-size: 30px;
  margin-left: 5px;
`;
