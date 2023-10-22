import { Link, useLocation } from 'react-router-dom';
import { PATH } from '../../constants/path';
import categoryData from '../category/mock.json';
import styled from '@emotion/styled';
import { _mainCol200 } from '../../constants/colors';

export default function SideNavBar() {
  const { pathname } = useLocation();
  return (
    <NavWrapper>
      <NavUl>
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
`
const NavUl = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

const NavLi = styled.li`
width: 2rem;
height: 2rem;
  padding: 0.5rem;
  margin: 3px 0;
  background-color: ${_mainCol200};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavLink = styled(Link)`
  text-decoration: none;
`

const NavIcon = styled.img`
  width: 95%;
`