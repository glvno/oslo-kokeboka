import { FC, useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import styled from '@emotion/styled';
import Input from './Input';
import Select from './Select';
import Ingredient from './Ingredient';
import IngredientForm from './IngredientForm';
import InputHHMM from './InputHHMM';
const RecipeForm: FC = () => {
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
      <Formik
        initialValues={{
          recipeName: '',
          bydel: 'Alna',
          category: '',
          author: '',
          yield: '1',
          prepTime: { hours: 0, minutes: 0 },
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
                Time to prepare: <InputHHMM name="prepTime" />
              </div>
              <IngredientForm props={props} />
              <pre>{JSON.stringify(props, null, 2)}</pre>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default RecipeForm;
