import styled from '@emotion/styled';
import Flex from './Flex';

const BydelNumber = styled.footer`
  font-size: 12px;
`;

const BydelName = styled.label`
  font-weight: 600;
`;

const StyledFlex = styled(Flex)`
  width: 315px;
  height: 148px;
  background: var(--paper);
  color: #14000f;
  align-items: flex-begin;
  padding: 20px;
  gap: 10px;
  letter-spacing: 0.01em;
  justify-content: space-between;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  border-radius: 5px;
`;

const BydelCard = ({ bydel, bydelRecipes, handleBydelClick }) => {
  return (
    <button onClick={() => handleBydelClick(bydel)}>
      <StyledFlex direction="column">
        <BydelName>{bydel}</BydelName>
        <BydelNumber>
          {bydelRecipes.length} {bydelRecipes.length === 1 ? 'recipe' : 'recipes'}{' '}
        </BydelNumber>
      </StyledFlex>
    </button>
  );
};

export default BydelCard;
