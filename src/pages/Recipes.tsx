import { FC, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Page from '../ui/Page';
import recipeService from '../services/recipe';
import RecipeCard from '../ui/RecipeCard';
import Button from '../ui/form/Button';
import Flex from '../ui/Flex';

const Recipes: FC = () => {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState(false);
  let keyCounter = 0;

  useEffect(() => {
    const getRecipes = async () => {
      const response = await recipeService.getAll();
      setRecipes(response);
    };
    getRecipes();
  }, []);
  return (
    <Page title="Oslo Recipes">
      <main>
        Here you can view recipes either assorted by area or as a simple list from all across the
        city.
        <Flex direction="column" align="center">
          <Flex gap="10px" padding="24px 0px 24px">
            <Button
              type="button"
              label="Bydels"
              style={filtered ? 'salmon' : 'wine'}
              onClick={() => setFiltered(!filtered)}
            />
            <Button
              type="button"
              label="Unsorted"
              onClick={() => setFiltered(!filtered)}
              style={filtered ? 'wine' : 'salmon'}
            />
          </Flex>

          {recipes.map((recipe) => {
            keyCounter += 1;
            return <RecipeCard recipe={recipe} key={keyCounter} />;
          })}
        </Flex>
      </main>
    </Page>
  );
};
export default Recipes;
