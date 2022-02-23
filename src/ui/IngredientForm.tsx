import { FieldArray } from 'formik';
import Ingredient from './Ingredient';

const IngredientForm = ({ props }) => {
  return (
    <div>
      Ingredients:
      <FieldArray
        name="ingredients"
        render={(arrayHelpers) => {
          return props.values.ingredients.map((_, index) => {
            return (
              <Ingredient
                index={index}
                arrayHelpers={arrayHelpers}
                key={`ingredient.${index * 1000}`}
              />
            );
          });
        }}
      />
    </div>
  );
};

export default IngredientForm;
