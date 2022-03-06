import { FC } from 'react';
import { Field } from 'formik';

const Checkbox: FC<{ name: string; label: string }> = ({ name, label }) => {
  return (
    <label style={{ gap: '10px', display: 'flex' }}>
      <Field type="checkbox" name={name} /> {label}
    </label>
  );
};

export default Checkbox;
