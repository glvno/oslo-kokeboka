import { FC } from 'React';
import { Formik, Form, Field } from 'formik';
import styled from '@emotion/styled';
// import Select from 'react-select';
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
          bydel: '',
          category: '',
          author: '',
          yield: '1',
          prepTimeHours: 0,
          prepTimeMinutes: 0,
        }}
        onSubmit={(values) => console.log(values, null, 2)}
      >
        {(props) => {
          return (
            <form onSubmit={props.handleSubmit}>
              <div>
                Recipe Name:{' '}
                <input
                  name="recipeName"
                  value={props.values.recipeName}
                  onChange={props.handleChange}
                />
              </div>
              <div>
                Category:{' '}
                <select name="category" value={props.values.category} onChange={props.handleChange}>
                  {categoryAry.map((category) => (
                    <option value={category} label={category} key={category} />
                  ))}
                </select>
              </div>
              <div>
                Author:{' '}
                <input
                  name="author"
                  onChange={props.handleChange}
                  value={props.values.author}
                  placeholder="Anonymous"
                />
              </div>
              <div>
                Bydel:{' '}
                <select name="bydel" onChange={props.handleChange} value={props.values.bydel}>
                  {bydelAry.map((bydel) => {
                    return <option value={bydel} label={bydel} key={bydel} />;
                  })}
                </select>
              </div>
              <div>
                Yield:{' '}
                <select name="yield" onChange={props.handleChange} value={props.values.yield}>
                  {' '}
                  {Array.from(Array(maxDropdown).keys()).map((num) => (
                    <option
                      value={num.toString()}
                      label={num.toString()}
                      key={`yield${num.toString()}`}
                    />
                  ))}
                  <option
                    value={`${maxDropdown.toString()}+`}
                    label={`${maxDropdown.toString()}+`}
                    key={`yield${maxDropdown.toString()}`}
                  />
                </select>
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
                <div>Ingredients:</div>
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
