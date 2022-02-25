import { FC } from 'react';
import RecipeForm from '../ui/RecipeForm';
import styled from '@emotion/styled';
import NavHeader from '../ui/NavHeader';

const StyledRecipeForm = styled(RecipeForm)`
  margin: 2vw;
  position: absolute;
  top: 120px;
  z-index: -1;
`;

const YourRecipe: FC = () => (
  <div style={{ maxWidth: '500px' }}>
    {' '}
    <NavHeader title="Your Recipe" />
    <StyledRecipeForm />
  </div>
);
export default YourRecipe;
