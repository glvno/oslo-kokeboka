import { FC, useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import styled from '@emotion/styled';
import Input from './Input';
import Select from './Select';
import Ingredient from './Ingredient';
import IngredientForm from './IngredientForm';
import InputHHMM from './InputHHMM';

const RecipeForm: FC = ({ className }) => {
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
    <div className={className}>
      <Formik
        initialValues={{
          recipeName: '',
          bydel: 'Alna',
          category: '',
          author: '',
          yield: '1',
          prepTime: { hours: 0, minutes: 0 },
          ingredients: [{ name: '', qty: '', units: '' }],
          directions: [''],
        }}
        onSubmit={(values) => console.log(values, null, 2)}
      >
        {(props) => {
          return (
            <form onSubmit={props.handleSubmit}>
              <div>
                <Input name="recipeName" placeholder="What is the name of the dish?" />
              </div>
              <div>
                Category: <Select name="category" options={categoryAry} />
              </div>
              <div>
                <Input name="author" placeholder="Tell us your name..." />
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
              Directions:
              <FieldArray
                name="directions"
                render={(arrayHelpers) => {
                  return props.values.directions.map((_, index) => {
                    return (
                      <div key={`directions${index * 10}`}>
                        <Field
                          placeholder="Enter directions here..."
                          component="textarea"
                          name={`directions.${index}`}
                          key={`directions${index * 10}`}
                        />
                        <button type="button" onClick={() => arrayHelpers.insert(index + 1, '')}>
                          +
                        </button>
                      </div>
                    );
                  });
                }}
              />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RecipeForm;
