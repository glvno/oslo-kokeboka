import Flex from './Flex';
import Header from './Header';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 130px;
  z-index: -1;
  max-width: 400px;
  // border: 1px white dotted;
`;

const Page = ({ title, children }) => (
  <Flex direction="column" maxWidth="500px" justify="space-between" align="center">
    <Header title={title} />
    <StyledDiv>{children}</StyledDiv>
  </Flex>
);

export default Page;
