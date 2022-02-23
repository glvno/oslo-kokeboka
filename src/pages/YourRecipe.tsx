import { FC } from 'React';
import { Formik, Form, Field } from 'formik';
import styled from '@emotion/styled';
import Input from '../ui/Input';
import Select from '../ui/Select';
const YourRecipe: FC = () => {
  const bydelAry = [
    'Alna',
    'Bjerke',
    'Frogner',
    'Gamle Oslo',
    'Grorud',
    'Grünerløkka',
    'Nordre Aker',
    'Nordstrand',
    'Sagene',
    'St. Hanshaugen',
    'Stovner',
    'Søndre Nordstrand',
    'Ullern',
    'Vestre Aker',
    'Østensjø',
  ];
  const maxDropdown = 12;

  const categoryAry = ['Appetizer', 'Entree', 'Drink', 'Other'];

  const ingredientCount = 3;

  const Select = ({ name, options }) => {
    return (
      <Field as="select" name={name}>
        {options.map((option, i) => (
          <option value={option} label={option} key={`${option}${i.toString()}`} />
        ))}
      </Field>
    );
  };

  return (
    <>
      <h1>Your Recipe</h1>
      <Formik
        initialValues={{
          recipeName: '',
          bydel: '',
          category: '',
          author: '',
          yield: '1',
          prepTimeHours: 0,
          prepTimeMinutes: 0,
          ingredients: [],
        }}
        onSubmit={(values) => console.log(values, null, 2)}
      >
        {(props) => {
          return (
            <form onSubmit={props.handleSubmit}>
              <div>
                Recipe Name: <Input name="recipeName" placeholder="My Recipe" />
              </div>
              <div>
                Category: <Select name="category" options={categoryAry} />
              </div>
              <div>
                Author: <Input name="author" placeholder="Name" />
              </div>
              <div>
                Bydel:
                <Select name="bydel" options={bydelAry} />{' '}
              </div>
              <div>
                Yield:{' '}
                <Select
                  name="yield"
                  // Create an array containing ints 0..N, remove 0, concat an 'N+' string as final element
                  options={Array.from(Array(maxDropdown).keys()).slice(1).concat(`${maxDropdown}+`)}
                />
              </div>
              <div>
                Time to prepare:{' '}
                <input
                  placeholder="00"
                  type="number"
                  step="1"
                  min="0"
                  max="12"
                  name="prepTimeHours"
                  onChange={props.handleChange}
                  value={props.values.prepTimeHours}
                />
                :{' '}
                <input
                  placeholder="00"
                  type="number"
                  step="5"
                  min="0"
                  max="55"
                  name="prepTimeMinutes"
                  onChange={props.handleChange}
                  value={props.values.prepTimeMinutes}
                />
              </div>
              <div>
                Ingredients
                <div>
                  Ingredient:
                  {Array.from(Array(ingredientCount).keys()).map((num) => {
                    return 'klsdjf';
                  })}
                </div>
              </div>

              <pre>{JSON.stringify(props, null, 2)}</pre>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default YourRecipe;
