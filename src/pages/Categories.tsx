import { data } from '../components/category/mock.json';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { PATH } from '../constants/path';

const StyledCategories = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow: hidden;

  /* width */
  ::-webkit-scrollbar {
    width: 15px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: yellow;
    border-radius: 5px;
  }
`;

const StyledCategoryItem = styled.input`
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 5px 0px 10px -2px rgba(0,0,0,0.4);
`;

export const Categories = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const handleCateogryClick = (category: string) => navigate(`/${PATH.CATEGORIES}/${category}`);

  if (category) {
    return (
      <StyledCategories>
        <Outlet />
      </StyledCategories>
    );
  }

  return (
    <>
      <StyledCategories>
        {data.map((c) => (
          <StyledCategoryItem
            type="image"
            src={c.imgUrl}
            key={c.categoryName}
            onClick={() => handleCateogryClick(c.categoryName)}
          />
        ))}
      </StyledCategories>
    </>
  );
};
