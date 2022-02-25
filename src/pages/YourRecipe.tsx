import { FC } from 'react';
import RecipeForm from '../ui/RecipeForm';
import styled from '@emotion/styled';
import NavHeader from '../ui/NavHeader';

const StyledRecipeForm = styled(RecipeForm)`
  margin: 2vw;
`;

const YourRecipe: FC = () => (
  <>
    {' '}
    <NavHeader title="Your Recipe" />
    <StyledRecipeForm />
  </>
);
export default YourRecipe;
