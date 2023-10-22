import { Link, useLocation } from 'react-router-dom';
import { PATH } from '../../constants/path';
import categoryData from '../category/mock.json';
import styled from '@emotion/styled';
import { _mainCol200 } from '../../constants/colors';

export default function SideNavBar() {
  const { pathname } = useLocation();
  const onPlayBtnClick = () => {
    alert('준비중인 서비스 입니다');
  };

  return (
    <NavWrapper>
      <NavUl>
        <PlayBtn onClick={onPlayBtnClick}>
          <span>▶️</span></PlayBtn>
        {categoryData.data.map((category) => (
          <NavLi key={category.index}>
            <NavLink to={`/${pathname.includes("/categories") ? PATH.CATEGORIES : PATH.ALBUM}/${category.categoryName}`}>
              <NavIcon src={category.iconUrl} />
            </NavLink>
          </NavLi>
        ))}
      </NavUl>
    </NavWrapper>
  );
}

const NavWrapper = styled.nav`
width: 100%;
height: 100%;
padding: 0.5rem 0 ;
`
const NavUl = styled.ul`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
`
const PlayBtn = styled.button`
width: 4rem;
height: 4rem;
  background: none;
  border: 3px solid black;
  border-radius: 50%;
  background-color: yellow;
  margin: 1rem 0;
  span{
font-size: large;
  }
  &:hover{
    cursor: pointer;
  }`

const NavLi = styled.li`
width: 4rem;
height: 4rem;
padding: 0.5rem;
margin: 3px 0;
background-color: ${_mainCol200};
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 5px 0px 10px -2px rgba(0,0,0,0.4);
  transition: all 0.2s  ;
  &:hover{
    scale: 1.1;
    cursor: pointer;
  }
  &:active{
    scale: 0.9;
  }
`

const NavLink = styled(Link)`
text-decoration: none;
`

const NavIcon = styled.img`
width: 95%;
`