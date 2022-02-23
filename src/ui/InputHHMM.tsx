import { Field } from 'formik';

const InputHHMM = (name) => {
  return (
    <>
      <Field type="number" placeholder="00" step="1" min="0" max="12" name={`${name}.hours`} />:{' '}
      <Field placeholder="00" type="number" step="5" min="0" max="55" name={`${name}.minutes`} />
    </>
  );
};

export default InputHHMM;
