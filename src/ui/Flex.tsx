import styled from '@emotion/styled';

type FlexRules =
  | 'stretch'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'baseline';

interface FlexProps {
  gap?: string;
  direction?: 'row' | 'column';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: FlexRules;
  align?: FlexRules;
  width?: string;
  height?: string;
  padding?: string;
  borderBottom?: string;
  grow?: string;
  maxWidth?: string;
}

const Flex = styled.div<FlexProps>`
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: ${({ padding }) => padding || '0'};
  width: ${({ width }) => width || 'unset'};
  height: ${({ height }) => height || 'unset'};
  gap: ${({ gap }) => gap || 'none'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  flex-direction: ${({ direction }) => direction || 'row'};
  flex-grow: ${({ grow }) => grow || '0'};
  max-width: ${({ maxWidth }) => maxWidth || 'unset'};
`;

export default Flex;

//TODO: abstract to take any HTML element?
