import { FieldArray } from 'formik';
import { FC } from 'react';
import Direction from './Direction';

const DirectionsBox: FC = () => {
  let keyCounter = 0;
  return (
    <FieldArray
      name="directions"
      render={(arrayHelpers) => {
        return arrayHelpers.form.values.directions.map((_, index) => {
          keyCounter += 1;

          return <Direction arrayHelpers={arrayHelpers} index={index} key={keyCounter} />;
        });
      }}
    />
  );
};

export default DirectionsBox;
