import { data } from '../components/category/mock.json';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { PATH } from '../constants/path';

const StyledCategories = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  overflow: auto;
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
  width: 150px;
  height: 180px;
  cursor: pointer;
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
