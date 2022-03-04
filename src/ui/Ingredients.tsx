import { FieldArray } from 'formik';
import Ingredient from './Ingredient';
import { FC } from 'react';
import ErrorLabel from './form/ErrorLabel';

const Ingredients: FC = () => {
  let keyCounter = 0;
  return (
    <FieldArray
      name="ingredients"
      render={(arrayHelpers) => {
        return arrayHelpers.form.values.ingredients.map((ingredient, index) => {
          keyCounter += 1;
          return (
            <div key={keyCounter}>
              <ErrorLabel name="ingredients" />
              <Ingredient index={index} arrayHelpers={arrayHelpers} />
            </div>
          );
        });
      }}
    />
  );
};

export default Ingredients;
