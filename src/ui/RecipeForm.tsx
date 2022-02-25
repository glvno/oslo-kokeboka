import { FC } from 'react';
import { Formik, Field } from 'formik';
import Input from './Input';
import Select from './Select';
import IngredientForm from './IngredientForm';
import InputHHMM from './InputHHMM';
import DirectionsBox from './DirectionsBox';
import TextArea from './TextArea';

interface RecipeFormProps {
  className: string;
}

const RecipeForm: FC<RecipeFormProps> = ({ className }) => {
  //TODO: convert strings in ary to objs for label/id purposes
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
        {(props) => {
          return (
            <form onSubmit={props.handleSubmit}>
              <Input name="recipeName" placeholder="What is the name of the dish?" />
              <Select
                name="category"
                options={categoryAry}
                placeholder="What kind of recipe is this?"
              />
              <Input name="author" placeholder="Tell us your name..." />
              <Select name="bydel" options={bydelAry} placeholder="Select your area" />
              <TextArea name="story" placeholder="What makes this dish special to you?" />
              <Select
                name="yield"
                placeholder="How many servings does this recipe produce?"
                // Create an array containing ints 0..N, remove 0, concat an 'N+' string as final element
                options={Array.from(Array(maxDropdown).keys())
                  .slice(1)
                  .map((num) => num.toString())
                  .concat(`${maxDropdown}+`)}
              />
              Time to prepare: <InputHHMM name="prepTime" />
              <IngredientForm />
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
                <Field type="checkbox" name="contact" /> Would you be open to sharing the story
                behind your recipe?
              </label>
              <button
                className="plus"
                onSubmit={() => {
                  console.log({
                    fileName: props.values.file.name,
                    type: props.values.file.type,
                    size: `${props.values.file.size} bytes`,
                  });
                }}
              >
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RecipeForm;
