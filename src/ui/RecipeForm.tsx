import { FC } from 'react';
import { Formik, Field } from 'formik';
import Input from './form/Input';
import Select from './form/Select';
import Ingredients from './Ingredients';
import InputPrepTime from './InputPrepTime';
import DirectionsBox from './DirectionsBox';
import TextArea from './form/TextArea';
import Button from './form/Button';
import { object, string, array, bool } from 'yup';
import recipeService from '../services/recipe';

const bydels = [
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

const categories = ['Appetizer', 'Entree', 'Drink', 'Other'];

const formValueSchema = object({
  recipeName: string().max(250).required(),
  bydel: string().required(),
  category: string(),
  story: string().max(1500),
  author: string(),
  prepTime: object({ hours: string(), minutes: string() }),
  ingredients: array(
    object({
      name: string().required().max(250),
      qty: string().max(100),
      units: string(),
    })
  ),
  directions: array(string().max(500)).min(1).max(100),
  notes: string().max(500),
  file: object(),
  email: string().email(),
  contact: bool(),
  reviewed: bool(),
  hidden: bool(),
});

const RecipeForm: FC = () => {
  //TODO: convert strings in ary to objs for label/id purposes
  return (
    <Formik
      initialValues={{
        recipeName: '',
        bydel: '',
        story: '',
        category: '',
        author: '',
        yield: 0,
        prepTime: { hours: 0, minutes: 0 },
        ingredients: [{ name: '', qty: '', units: '' }],
        directions: [''],
        notes: '',
        file: {},
        email: '',
        contact: false,
        reviewed: false,
        hidden: false,
      }}
      onSubmit={async (values) => {
        const parsedValues = await formValueSchema.validate(values);
        recipeService.create(parsedValues);
        console.log(parsedValues);
      }}
    >
      {(props) => {
        return (
          <form onSubmit={props.handleSubmit}>
            <Input name="recipeName" placeholder="What is the name of the dish?" />
            <Select
              name="category"
              options={categories}
              placeholder="What kind of recipe is this?"
            />
            <Input name="author" placeholder="Tell us your name..." />
            <Select name="bydel" options={bydels} placeholder="Select your area" />
            <TextArea name="story" placeholder="What makes this dish special to you?" />
            <Select
              name="yield"
              placeholder="How many servings does this recipe produce?"
              options={Array(12)
                .fill(true)
                .map((_, i) => (i === 11 ? `${i + 1}+` : `${i + 1}`))}
            />
            Time to prepare: <InputPrepTime name="prepTime" />
            <Ingredients />
            <DirectionsBox />
            <TextArea name="notes" placeholder="Any additional notes go here!" />
            <input
              id="file"
              name="file"
              type="file"
              onChange={(event) => {
                props.setFieldValue('file', event.currentTarget.files[0]);
              }}
            />
            <Input name="email" placeholder="Email" />{' '}
            <label>
              <Field type="checkbox" name="contact" /> Would you be open to sharing the story behind
              your recipe?
            </label>
            <Button label="Submit" type="submit" />
          </form>
        );
      }}
    </Formik>
  );
};

export default RecipeForm;
