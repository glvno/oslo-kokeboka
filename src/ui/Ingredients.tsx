import { FieldArray } from 'formik';
import Ingredient from './Ingredient';
import { FC } from 'react';
import Flex from './Flex';
import ErrorLabel from './form/ErrorLabel';

const Ingredients: FC = () => {
  let keyCounter = 0;
  return (
    <Flex direction="column">
      <ErrorLabel name="ingredients" />
      <FieldArray
        name="ingredients"
        render={(arrayHelpers) => {
          return arrayHelpers.form.values.ingredients.map((ingredient, index) => {
            keyCounter += 1;
            return <Ingredient index={index} arrayHelpers={arrayHelpers} key={keyCounter} />;
          });
        }}
      />
    </Flex>
  );
};

export default Ingredients;
