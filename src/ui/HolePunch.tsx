import styled from '@emotion/styled';

const HolePunch = styled.div<{ side: string; top: string }>`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--darkest-wine);

  ${({ side }) => side}: -5px;
  top: ${({ top }) => top};
`;

export default HolePunch;
