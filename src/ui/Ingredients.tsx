import { FieldArray } from 'formik';
import Ingredient from './Ingredient';
import { FC } from 'react';

const Ingredients: FC = () => {
  let keyCounter = 0;
  return (
    <FieldArray
      name="ingredients"
      render={(arrayHelpers) => {
        return arrayHelpers.form.values.ingredients.map((ingredient, index) => {
          keyCounter += 1;
          return <Ingredient index={index} arrayHelpers={arrayHelpers} key={keyCounter} />;
        });
      }}
    />
  );
};

export default Ingredients;
