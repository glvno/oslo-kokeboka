import { FC } from 'react';
import { Formik } from 'formik';
import Input from './form/Input';
import Select from './form/Select';
import Ingredients from './Ingredients';
import InputPrepTime from './InputPrepTime';
import DirectionsBox from './DirectionsBox';
import TextArea from './form/TextArea';
import Button from './form/Button';
import { object, string, array, bool, addMethod } from 'yup';
import recipeService from '../services/recipes';
import { bydels } from '../util/constants';
import { useNavigate } from 'react-router-dom';
import Checkbox from './form/Checkbox';

const categories = ['Appetizer', 'Entree', 'Drink', 'Other'];

addMethod(string, 'replaceEmptyName', function () {
  return this.transform((value) => (value === '' ? 'Anonymous' : value));
});

const formValueSchema = object({
  title: string().max(250).required(),
  bydel: string().required(),
  category: string(),
  story: string().max(1500),
  author: string().replaceEmptyName(),
  prepTime: object({ hours: string(), minutes: string() }),
  ingredients: array(
    object({
      name: string().min(1).max(100),
      qty: string().max(100),
      units: string(),
    })
  )
    .compact((v) => !v.name)
    .min(1),
  directions: array(string()).compact().min(1),
  notes: string().max(500),
  // file: object(),
  email: string().email(),
  contact: bool(),
  reviewed: bool(),
  hidden: bool(),
});

const RecipeForm: FC = () => {
  const navigate = useNavigate();
  const goToRecipePage = (id) => {
    navigate(`/recipe/${id}`);
  };
  return (
    <Formik
      initialValues={{
        title: '',
        bydel: '',
        story: '',
        category: '',
        author: '',
        yield: 0,
        prepTime: { hours: 0, minutes: 0 },
        ingredients: [{ name: '', qty: '', units: '' }],
        directions: [''],
        notes: '',
        // file: {},
        email: '',
        contact: false,
        reviewed: false,
        hidden: false,
      }}
      validationSchema={formValueSchema}
      onSubmit={async (values) => {
        const parsedValues = await formValueSchema.validate(values);
        const response = await recipeService.create(parsedValues);
        const id = response.ref['@ref'].id;
        goToRecipePage(id);
      }}
    >
      {({ handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Input name="title" placeholder="What is the name of the dish?" />
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
            <InputPrepTime />
            <Ingredients />
            <DirectionsBox />
            <TextArea name="notes" placeholder="Any additional notes go here!" />
            <Input name="email" placeholder="Email" />{' '}
            <Checkbox
              name="contact"
              label="Would you be open to sharing the story behind
              your recipe?"
            />
            <Button label="Submit" type="submit" onClick={handleSubmit} />
          </form>
        );
      }}
    </Formik>
  );
};

export default RecipeForm;
