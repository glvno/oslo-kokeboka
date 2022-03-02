import styled from '@emotion/styled';
import Flex from './Flex';
import { questions } from '../util/constants';

const StyledFlex = styled(Flex)`
  width: 365px;
  background: var(--recipe-card-background);
  color: #14000f;
  align-content: center;
  padding: 30px;
  gap: 10px;
  letter-spacing: 0.01em;
  justify-content: space-around;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 122%;
  border-radius: 5px;
`;

const TopLeftHolePunch = styled.div`
  position: absolute;
  background: var(--background);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 40%;
  left: -5px;
`;

const TopRightHolePunch = styled.div`
  position: absolute;
  background: var(--background);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 40%;
  right: -5px;
`;

const BottomLeftHolePunch = styled.div`
  position: absolute;
  background: var(--background);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 60%;
  left: -5px;
`;

const BottomRightHolePunch = styled.div`
  position: absolute;
  background: var(--background);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 60%;
  right: -5px;
`;

const QuestionnaireCard = ({ recipe }) => {
  let keyCounter = 0;
  const questionnaireQuestions = questions.en;
  return (
    <StyledFlex direction="column">
      <TopLeftHolePunch /> <TopRightHolePunch />
      <BottomLeftHolePunch /> <BottomRightHolePunch />
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
