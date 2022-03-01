import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Page from '../ui/Page';
import recipeService from '../services/recipes';
import RecipeTitleCard from '../ui/RecipeTitleCard';
import QuestionnaireCard from '../ui/QuestionnaireCard';

const Recipe: FC = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getRecipe = async (id) => {
      const response = await recipeService.getOne(id);
      setRecipe(response);
    };
    getRecipe(id);
  }, []);
  return (
    <Page title={'Oslo Recipes'}>
      <RecipeTitleCard recipe={recipe} />
      <QuestionnaireCard recipe={recipe} />
    </Page>
  );
};

export default Recipe;
