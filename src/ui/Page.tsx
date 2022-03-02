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
`;

const Page = ({ title, children }) => (
  <Flex direction="column" width="100%" maxWidth="500px" align="center">
    <Header title={title} />
    <StyledDiv>{children}</StyledDiv>
  </Flex>
);

export default Page;
