import { FieldArray } from 'formik';
import Ingredient from './Ingredient';
import { FC } from 'react';

const IngredientForm: FC = () => {
  return (
    <FieldArray
      name="ingredients"
      render={(arrayHelpers) => {
        return arrayHelpers.form.values.ingredients.map((ingredient, index) => (
          <Ingredient index={index} arrayHelpers={arrayHelpers} key={ingredient} />
        ));
      }}
    />
  );
};

export default IngredientForm;
