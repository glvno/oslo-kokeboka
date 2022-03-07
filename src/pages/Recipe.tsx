import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Page from '../ui/Page';
import recipeService from '../services/recipes';
import RecipeTitleCard from '../ui/RecipeTitleCard';
import QuestionnaireCard from '../ui/QuestionnaireCard';
import Flex from '../ui/Flex';

const Recipe: FC = () => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getRecipe = async (id) => {
      const response = await recipeService.getOne(id);
      setRecipe(response.data);
    };
    getRecipe(id);
  }, []);

  return (
    <Page title={'Oslo Recipes'}>
      <Flex direction="column" gap="15px">
        <RecipeTitleCard recipe={recipe} />
        <QuestionnaireCard recipe={recipe} />
      </Flex>
    </Page>
  );
};

export default Recipe;
