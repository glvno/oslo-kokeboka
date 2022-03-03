import styled from '@emotion/styled';
import Flex from './Flex';

const AuthorLabel = styled.label`
  display: flex;
  gap: 0.6rem;
`;

const BydelName = styled.label`
  font-size: 17px;
  font-weight: 600;
`;

const RecipeName = styled.label`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 30px;
`;
const AuthorName = styled.label`
  width: 277px;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 30px;
  vertical-align: center;
`;

const StyledFlex = styled(Flex)`
  width: 365px;
  height: 189px;
  background: var(--pink);
  color: #14000f;
  align-content: center;
  padding: 30px;
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
  top: 40%;
  left: -5px;
`;

const TopRightHolePunch = styled.div`
  position: absolute;
  background: var(--background);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 40%;
  right: -5px;
`;

const BottomLeftHolePunch = styled.div`
  position: absolute;
  background: var(--background);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 60%;
  left: -5px;
`;

const BottomRightHolePunch = styled.div`
  position: absolute;
  background: var(--background);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 60%;
  right: -5px;
`;

const RecipeCard = ({ recipe }) => {
  return (
    <StyledFlex direction="column">
      <TopLeftHolePunch />
      <TopRightHolePunch />
      <BottomLeftHolePunch />
      <BottomRightHolePunch />
      <RecipeName>{recipe.recipeName}</RecipeName>
      <AuthorLabel>
        BY <AuthorName>{recipe.author}</AuthorName>
      </AuthorLabel>
      <BydelName>{recipe.bydel}</BydelName>
    </StyledFlex>
  );
};

export default RecipeCard;
