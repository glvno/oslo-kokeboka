import { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Page from '../ui/Page';
import recipeService from '../services/recipe';
import RecipeCard from '../ui/form/RecipeCard';

const Recipes: FC = () => {
  const [recipes, setRecipes] = useState([]);
  let keyCounter = 0;

  useEffect(() => {
    const getRecipes = async () => {
      const response = await recipeService.getAll();
      console.log(response);
      setRecipes(response);
    };
    getRecipes();
  }, []);
  return (
    <Page title="Oslo Recipes">
      {recipes.map((recipe) => {
        keyCounter += 1;
        return <RecipeCard recipe={recipe} key={keyCounter} />;
      })}
    </Page>
  );
};
export default Recipes;
