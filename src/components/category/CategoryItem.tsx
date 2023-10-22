import { CategoryItem as CategoryItemType } from '../../types/CategoryItem';
import styled from '@emotion/styled';

const StyledCategoryItem = styled.img`
  border-radius: 5px;
  width: 150px;
  height: 180px;
  cursor: pointer;
`;

// TODO: Category.tsx에서 이전에 사용했으나, 현재 사용 안함.
export const CategoryItem = ({ index, categoryName, imgUrl }: CategoryItemType) => {
  return (
    <>
      <StyledCategoryItem src={imgUrl}></StyledCategoryItem>
    </>
  );
};
