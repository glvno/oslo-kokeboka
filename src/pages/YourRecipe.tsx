import { FC, useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
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

  return (
    <>
      <h1>Your Recipe</h1>
      <Formik
        initialValues={{
          recipeName: '',
          bydel: 'Alna',
          category: '',
          author: '',
          yield: '1',
          prepTimeHours: 0,
          prepTimeMinutes: 0,
          ingredients: [{ name: '', qty: '', units: '' }],
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
                <Field
                  type="number"
                  placeholder="00"
                  step="1"
                  min="0"
                  max="12"
                  name="prepTimeHours"
                />
                :{' '}
                <Field
                  placeholder="00"
                  type="number"
                  step="5"
                  min="0"
                  max="55"
                  name="prepTimeMinutes"
                />
              </div>
              <div>
                Ingredients:
                <FieldArray
                  name="ingredients"
                  render={(arrayHelpers) => {
                    return props.values.ingredients.map((num, index) => {
                      return (
                        <div key={`ingredients${index}`}>
                          Quantity:{' '}
                          <Field placeholder="1" type="number" name={`ingredients.${index}.qty`} />{' '}
                          Units:{' '}
                          <Select
                            name={`ingredients.${index}.units`}
                            options={[
                              'pinches',
                              'tsps',
                              'tbsps',
                              'cups',
                              'pints',
                              'quarts',
                              'gallons',
                            ]}
                          />
                          Ingredient:{' '}
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
                        </div>
                      );
                    });
                  }}
                />
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
