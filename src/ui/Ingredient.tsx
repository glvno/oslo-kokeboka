import Select from './Select';
import { Field } from 'formik';
import Input from './Input';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  color: var(--text);
  height: 51px;
  display: flex;
  justify-content: flex-left;
  gap: 10px;
`;

const StyledField = styled(Field)`
  border-radius: 5px;
  border: 1px var(--text) solid;
  height: 51;
  width: 10%;
  padding-left: 10px;
`;

const Ingredient = ({ arrayHelpers, index }) => {
  return (
    <StyledDiv key={`ingredients${index}`}>
      <StyledField placeholder="1" type="number" name={`ingredients.${index}.qty`} />
      <Select
        name={`ingredients.${index}.units`}
        options={['pinches', 'tsps', 'tbsps', 'cups', 'pints', 'quarts', 'gallons']}
      />
      <Input name={`ingredients.${index}.name`} placeholder="Ingredient" />
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
    </StyledDiv>
  );
};

export default Ingredient;
