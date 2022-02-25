import Header from './Header';
import styled from '@emotion/styled';

const StyledHeader = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 114%;
  padding-right: 100px;
  display: flex;
  /* or 34px */

  letter-spacing: 0.02em;
  text-transform: uppercase;
  justify-content: flex-end;

  text-shadow: -1px 1px 0px #14000f;
`;

const NavHeader = ({ title }) => {
  return <StyledHeader>{title}</StyledHeader>;
};

export default NavHeader;
