import styled from '@emotion/styled';
import Flex from './Flex';
import HolePunch from './HolePunch';

const AuthorLabel = styled.label`
  display: flex;
  gap: 0.6rem;
`;

const BydelName = styled.label`
  font-size: 17px;
  font-weight: 600;
`;

const Title = styled.label`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 30px;
`;
const AuthorName = styled.label`
  width: 277px;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 30px;
  vertical-align: center;
`;

const StyledFlex = styled(Flex)`
  width: 365px;
  height: 189px;
  background: var(--pink);
  color: #14000f;
  align-content: center;
  padding: 30px;
  gap: 10px;
  letter-spacing: 0.01em;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  border-radius: 5px;
`;

const RecipeCard = ({ recipe: { title, bydel, author } }) => {
  return (
    <StyledFlex justify="space-around" direction="column">
      <HolePunch side="left" top="33%" />
      <HolePunch side="right" top="33%" />
      <HolePunch side="left" top="66%" />
      <HolePunch side="right" top="66%" />
      <Title>{title}</Title>
      <AuthorLabel>
        BY <AuthorName>{author}</AuthorName>
      </AuthorLabel>
      <BydelName>{bydel}</BydelName>
    </StyledFlex>
  );
};

export default RecipeCard;
