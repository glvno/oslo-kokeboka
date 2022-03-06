import Flex from './Flex';
import Header from './Header';
import styled from '@emotion/styled';

const StyledMain = styled.main`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  top: 130px;
  z-index: -1;
  max-width: 400px;
`;

const Page = ({ title, children }) => (
  <Flex direction="column" maxWidth="500px" justify="space-between" align="center">
    <Header title={title} />
    <StyledMain>{children}</StyledMain>
  </Flex>
);

export default Page;
