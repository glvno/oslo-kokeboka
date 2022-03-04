import { FC, useEffect, useState } from 'react';
import Page from '../ui/Page';
import recipeService from '../services/recipes';
import RecipeCard from '../ui/RecipeCard';
import Button from '../ui/form/Button';
import Flex from '../ui/Flex';
import { bydels } from '../util/constants';
import BydelCard from '../ui/BydelCard';
import { useNavigate } from 'react-router-dom';

const Recipes: FC = () => {
  const [recipes, setRecipes] = useState([]);
  const [bydelView, setBydelView] = useState(false);
  const [bydelFilter, setBydelFilter] = useState('');

  let keyCounter = 0;
  const navigate = useNavigate();

  useEffect(() => {
    const getRecipes = async () => {
      const response = await recipeService.getAll();
      setRecipes(response);
    };
    getRecipes();
  }, []);

  const filteredRecipes = recipes.filter((recipe) => recipe.bydel.includes(`${bydelFilter}`));

  const handleBydelClick = (bydelName) => {
    setBydelFilter(bydelName);
    setBydelView(false);
  };

  const handleRecipeClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <Page title="Oslo Recipes">
      <p>
        Here you can view recipes either assorted by area or as a simple list from all across the
        city.
      </p>
      <Flex direction="column" align="center">
        <Flex gap="10px" padding="24px 0px 24px">
          <Button
            type="button"
            label={bydelFilter || 'Bydels'}
            background={bydelView || bydelFilter ? 'salmon' : 'darkest-wine'}
            color={bydelView || bydelFilter ? 'darkest-wine' : 'salmon'}
            onClick={() => {
              setBydelView(true);
              setBydelFilter('');
            }}
          />
          <Button
            type="button"
            label="Unsorted"
            onClick={() => {
              setBydelView(false);
              setBydelFilter('');
            }}
            background={bydelView || bydelFilter !== '' ? 'darkest-wine' : 'salmon'}
            color={bydelView || bydelFilter !== '' ? 'salmon' : 'darkest-wine'}
          />
        </Flex>

        {bydelView
          ? bydels.map((mapBydel) => {
              const bydelRecipes = recipes.filter(({ bydel }) => bydel === mapBydel);
              keyCounter += 1;
              return (
                <BydelCard
                  bydel={mapBydel}
                  bydelRecipes={bydelRecipes}
                  key={keyCounter}
                  handleBydelClick={handleBydelClick}
                />
              );
            })
          : filteredRecipes.map((recipe) => {
              keyCounter += 1;
              return (
                <RecipeCard
                  recipe={recipe}
                  key={keyCounter}
                  handleRecipeClick={handleRecipeClick}
                />
              );
            })}
      </Flex>
    </Page>
  );
};
export default Recipes;
