import styled from '@emotion/styled';
import Flex from '../Flex';

const AuthorName = styled.footer`
  font-size: 12px;
  line-height: 16px;
  // font-family-sneak;
`;

const RecipeName = styled.label`
  font-weight: 600;
`;

const StyledFlex = styled(Flex)`
  width: 315px;
  height: 101px;
  background: var(--recipe-card-background);
  color: #14000f;
  align-items: center;
  padding: 20px;
  gap: 10px;
  margin-bottom: 10px;
  letter-spacing: 0.01em;
  justify-content: space-around;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 122%;
  border-radius: 5px;
`;

const TopLeftHolePunch = styled.div`
  position: absolute;
  background: var(--background);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 33%;
  left: -5px;
`;

const TopRightHolePunch = styled.div`
  position: absolute;
  background: var(--background);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 33%;
  right: -5px;
`;

const BottomLeftHolePunch = styled.div`
  position: absolute;
  background: var(--background);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 66%;
  left: -5px;
`;

const BottomRightHolePunch = styled.div`
  position: absolute;
  background: var(--background);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 66%;
  right: -5px;
`;

const RecipeCard = ({ recipe }) => {
  const nothing = null;
  return (
    <StyledFlex direction="column">
      <TopLeftHolePunch top="33%" /> <TopRightHolePunch />
      <BottomLeftHolePunch /> <BottomRightHolePunch />
      <RecipeName>{recipe.recipeName}</RecipeName>
      <footer>Submitted By</footer>
      <AuthorName>{recipe.author}</AuthorName>
    </StyledFlex>
  );
};

export default RecipeCard;
