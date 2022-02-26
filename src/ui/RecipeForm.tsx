import { FC } from 'react';
import { Formik, Field } from 'formik';
import Input from './form/Input';
import Select from './form/Select';
import Ingredients from './Ingredients';
import InputPrepTime from './InputPrepTime';
import DirectionsBox from './DirectionsBox';
import TextArea from './form/TextArea';
import Button from './form/Button';
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

interface RecipeFormProps {
  className: string;
}

const RecipeForm: FC<RecipeFormProps> = () => {
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
        file: null,
        email: '',
        contact: false,
        reviewed: false,
        hidden: false,
      }}
      onSubmit={(values) => console.log(values, null, 2)}
    >
      {({ handleSubmit, values }) => {
        return (
          <form onSubmit={handleSubmit}>
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
              // Create an array containing ints 0..N, remove 0, concat an 'N+' string as final element
              options={Array(12)
                .fill(true)
                .map((_, i) => (i === 11 ? `${i + 1}+` : `${i + 1}`))}
            />
            <InputPrepTime name="prepTime" />
            <Ingredients />
            <DirectionsBox />
            <TextArea name="notes" placeholder="Any additional notes go here!" />
            {/* <input
                id="file"
                name="file"
                type="file"
                onChange={(event) => {
                  props.setFieldValue('file', event.currentTarget.files[0]);
                }}
              /> */}
            <Input name="email" placeholder="Email" />{' '}
            <label>
              <Field type="checkbox" name="contact" /> Would you be open to sharing the story behind
              your recipe?
            </label>
            <Button
              label="Submit"
              onSubmit={() => {
                console.log({
                  fileName: values.file.name,
                  type: values.file.type,
                  size: `${values.file.size} bytes`,
                });
              }}
            />
          </form>
        );
      }}
    </Formik>
  );
};

export default RecipeForm;
