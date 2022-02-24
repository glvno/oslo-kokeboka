import { FC } from 'react';
import RecipeForm from '../ui/RecipeForm';
import styled from '@emotion/styled';

const StyledRecipeForm = styled(RecipeForm)`
  margin: 2vw;
`;

const YourRecipe: FC = () => (
  <>
    {' '}
    <h1>Your Recipe</h1>
    <StyledRecipeForm />
  </>
);
export default YourRecipe;
