import { useState } from 'react';
import { CategoryItem } from '../components/category/CategoryItem';
import { data } from '../components/category/mock.json';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledCategory = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
`;

export const Category = () => {
  const [category, setCategory] = useState(data);

  return (
    <>
      <StyledCategory>
        {category.map((c) => (
          <CategoryItem key={c.index} categoryName={c.categoryName} imgUrl={c.imgUrl} />
        ))}
      </StyledCategory>
    </>
  );
};
