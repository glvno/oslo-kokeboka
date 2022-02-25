import styled from '@emotion/styled';
import { FC } from 'react';

const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  background-color: var(--background);
  font-weight: 600;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  padding-top: 25px;
  padding-left: 25px;
  line-height: 114%;
  /* or 34px */

  letter-spacing: 0.01em;
  text-transform: uppercase;
`;
interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return <StyledHeader>{title}</StyledHeader>;
};

export default Header;
