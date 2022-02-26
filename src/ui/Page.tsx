import Flex from './Flex';
import NavHeader from './NavHeader';

const Page = ({ title, children }) => (
  <Flex direction="column" maxWidth="500px" justify="space-between" align="space-between">
    <NavHeader title={title} />
    {children}
  </Flex>
);

export default Page;
