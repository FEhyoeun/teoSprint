import { CategoryItem as CategoryItemType } from '../../types/CategoryItem';
import styled from '@emotion/styled';

const StyledCategoryItem = styled.img`
  border-radius: 5px;
  width: 150px;
  height: 180px;
  cursor: pointer;
`;

export const CategoryItem = ({ index, categoryName, imgUrl }: CategoryItemType) => {
  return (
    <>
      <StyledCategoryItem src={imgUrl}></StyledCategoryItem>
    </>
  );
};
