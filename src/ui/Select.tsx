import { Field } from 'formik';
const Select = ({ name, options }) => {
  return (
    <Field as="select" name={name}>
      {options.map((option, i) => (
        <option value={option} label={option} key={`${option}${i.toString()}`} />
      ))}
    </Field>
  );
};
export default Select;
