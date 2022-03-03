import styled from '@emotion/styled';
import Flex from './Flex';

const BydelName = styled.footer`
  font-size: 12px;
  // font-family-sneak;
`;

const title = styled.label`
  font-weight: 600;
`;

const StyledFlex = styled(Flex)`
  width: 315px;
  height: 101px;
  background: var(--recipe-card-background);
  color: #14000f;
  align-items: flex-begin;
  padding: 20px;
  gap: 10px;
  margin-bottom: 10px;
  letter-spacing: 0.01em;
  justify-content: space-around;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
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

const RecipeCard = ({ recipe, handleRecipeClick }) => {
  return (
    <button onClick={() => handleRecipeClick(recipe.id)}>
      <StyledFlex direction="column">
        <TopLeftHolePunch /> <TopRightHolePunch />
        <BottomLeftHolePunch /> <BottomRightHolePunch />
        <title>{recipe.title}</title>
        <footer>Submitted By {recipe.author}</footer>
        <BydelName>{recipe.bydel}</BydelName>
      </StyledFlex>
    </button>
  );
};

export default RecipeCard;
