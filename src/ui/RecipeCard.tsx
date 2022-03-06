import styled from '@emotion/styled';
import Flex from './Flex';
import HolePunch from './HolePunch';

const BydelName = styled.footer`
  font-size: 12px;
  // font-family-sneak;
`;

const Title = styled.p`
  font-weight: 600;
`;

const StyledFlex = styled(Flex)`
  width: 315px;
  height: 101px;
  background: var(--paper);
  color: #14000f;
  align-items: flex-begin;
  padding: 20px;
  gap: 10px;
  letter-spacing: 0.01em;
  justify-content: space-around;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  border-radius: 5px;
`;

const RecipeCard = ({ recipe, handleRecipeClick }) => {
  return (
    <button onClick={() => handleRecipeClick(recipe.id)}>
      <StyledFlex direction="column">
        <HolePunch side="left" top="33%" />
        <HolePunch side="right" top="33%" />
        <HolePunch side="left" top="66%" />
        <HolePunch side="right" top="66%" />
        <Title>{recipe.title}</Title>
        <footer>Submitted By {recipe.author}</footer>
        <BydelName>{recipe.bydel}</BydelName>
      </StyledFlex>
    </button>
  );
};

export default RecipeCard;
