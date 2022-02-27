import styled from '@emotion/styled';
import Flex from '../Flex';

const StyledDiv = styled.div`
  background: var(--recipe-card-background);
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 122%;
  color: #14000f;
  /* identical to box height, or 21px */
  display: flex;
  height: 101px;

  letter-spacing: 0.01em;
  justify-content: space-around;
`;

const StyledFlex = styled(Flex)`
  width: 315px;
`;

const RecipeCard = ({ recipe }) => {
  const nothing = null;
  return (
    <Flex direction="column">
      <StyledDiv>{recipe.recipeName}</StyledDiv>
      <StyledDiv>{recipe.author}</StyledDiv>
    </Flex>
  );
};

export default RecipeCard;
