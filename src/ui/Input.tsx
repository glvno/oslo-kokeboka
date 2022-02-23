import { Field } from 'formik';

const Input = ({ name, placeholder }) => {
  return <Field type="input" name={name} placeholder={placeholder} />;
};

export default Input;
