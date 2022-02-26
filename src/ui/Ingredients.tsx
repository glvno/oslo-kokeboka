import { FieldArray } from 'formik';
import Ingredient from './Ingredient';
import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Ingredients: FC = () => {
  return (
    <FieldArray
      name="ingredients"
      render={(arrayHelpers) => {
        return arrayHelpers.form.values.ingredients.map((ingredient, index) => {
          const uuid = uuidv4();

          return <Ingredient index={index} arrayHelpers={arrayHelpers} key={uuid} />;
        });
      }}
    />
  );
};

export default Ingredients;
