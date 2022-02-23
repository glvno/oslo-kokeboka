import Select from './Select';
import { Field } from 'formik';
import Input from './Input';

const Ingredient = ({ arrayHelpers, index }) => {
  return (
    <div key={`ingredients${index}`}>
      Quantity: <Field placeholder="1" type="number" name={`ingredients.${index}.qty`} /> Units:{' '}
      <Select
        name={`ingredients.${index}.units`}
        options={['pinches', 'tsps', 'tbsps', 'cups', 'pints', 'quarts', 'gallons']}
      />
      Ingredient: <Input name={`ingredients.${index}.name`} placeholder="Ingredient" />
      <button
        type="button"
        onClick={() => {
          return arrayHelpers.insert(index + 1, {
            name: '',
            qty: '',
            units: '',
          });
        }}
      >
        +
      </button>
    </div>
  );
};

export default Ingredient;
