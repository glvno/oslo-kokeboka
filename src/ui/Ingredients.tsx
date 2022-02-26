import { FieldArray } from 'formik';
import Ingredient from './Ingredient';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

const IngredientForm: FC = () => {
  return (
    <FieldArray
      name="ingredients"
      render={(arrayHelpers) => {
        const uuid = new Date().getTime();
        return arrayHelpers.form.values.ingredients.map((ingredient, index) => (
          <Ingredient index={index} arrayHelpers={arrayHelpers} key={uuidv4()} />
        ));
      }}
    />
  );
};

export default IngredientForm;
