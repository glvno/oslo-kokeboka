import { FieldArray } from 'formik';
import { FC } from 'react';
import ErrorLabel from './form/ErrorLabel';
import Direction from './Direction';

const DirectionsBox: FC = () => {
  let keyCounter = 0;
  return (
    <FieldArray
      name="directions"
      render={(arrayHelpers) => {
        return arrayHelpers.form.values.directions.map((_, index) => {
          keyCounter += 1;

          return (
            <div key={keyCounter}>
              <ErrorLabel name="directions" />
              <Direction arrayHelpers={arrayHelpers} index={index} />
            </div>
          );
        });
      }}
    />
  );
};

export default DirectionsBox;
