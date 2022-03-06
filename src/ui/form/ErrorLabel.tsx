import { ErrorMessage } from 'formik';
import styled from '@emotion/styled';

const StyledLabel = styled.label`
  color: var(--ochre);
`;

const ErrorLabel = ({ name }) => {
  return <ErrorMessage name={name} component={StyledLabel} />;
};

export default ErrorLabel;
