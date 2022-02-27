import styled from '@emotion/styled';
import Flex from './Flex';

const BydelNumber = styled.footer`
  font-size: 12px;
  line-height: 16px;
  // font-family-sneak;
`;

const BydelName = styled.label`
  font-weight: 600;
`;

const StyledFlex = styled(Flex)`
  width: 315px;
  height: 101px;
  background: var(--recipe-card-background);
  color: #14000f;
  align-items: flex-begin;
  padding: 20px;
  gap: 10px;
  margin-bottom: 10px;
  letter-spacing: 0.01em;
  justify-content: space-around;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 122%;
  border-radius: 5px;
`;

const BydelCard = ({ bydel, count }) => {
  return (
    <StyledFlex direction="column">
      <BydelName>{bydel}</BydelName>
      <BydelNumber>
        {count} {count === 1 ? 'recipe' : 'recipes'}{' '}
      </BydelNumber>
    </StyledFlex>
  );
};

export default BydelCard;
