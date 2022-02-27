import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Page from '../ui/Page';
import Flex from '../ui/Flex';
import recipeService from '../services/recipe';
import RecipeTitleCard from '../ui/RecipeTitleCard';
import QuestionnaireCard from '../ui/QuestionnaireCard';

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  console.log(useParams());

  useEffect(() => {
    const getRecipe = async (id) => {
      const response = await recipeService.getOne(id);
      setRecipe(response);
    };
    getRecipe(id);
  }, []);
  return (
    <Page title={'Oslo Recipes'}>
      {JSON.stringify(recipe, null, 2)}
      <RecipeTitleCard recipe={recipe} />
      <QuestionnaireCard recipe={recipe} />
    </Page>
  );
};

export default Recipe;
