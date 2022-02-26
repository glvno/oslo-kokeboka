import { FC } from 'react';
import RecipeForm from '../ui/RecipeForm';
import styled from '@emotion/styled';
import Page from '../ui/Page';

const StyledRecipeForm = styled(RecipeForm)`
  margin: 2vw;
  position: absolute;
  top: 120px;
  z-index: -1;
`;

const YourRecipe: FC = () => (
  <Page title="Your Recipe">
    <StyledRecipeForm />
  </Page>
);
export default YourRecipe;
