import styled from '@emotion/styled';
import Flex from './Flex';
import { questions } from '../util/constants';
import HolePunch from './HolePunch';

const StyledFlex = styled(Flex)`
  width: 365px;
  background: var(--paper);
  color: #14000f;
  align-content: center;
  padding: 30px;
  gap: 10px;
  margin-bottom: 10px;
  letter-spacing: 0.01em;
  justify-content: space-around;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  border-radius: 5px;
`;

const QuestionnaireCard = ({ recipe }) => {
  let keyCounter = 0;
  const questionnaireQuestions = questions.en;
  return (
    <StyledFlex direction="column">
      <HolePunch side="left" top="33%" />
      <HolePunch side="right" top="33%" />
      <HolePunch side="left" top="66%" />
      <HolePunch side="right" top="66%" />
      {Object.entries(questionnaireQuestions).map((question) => {
        keyCounter += 1;
        return (
          <dl key={keyCounter}>
            <dt>{question[1]}</dt>
            <dd>{recipe[question[0]]}</dd>
          </dl>
        );
      })}
    </StyledFlex>
  );
};

export default QuestionnaireCard;
