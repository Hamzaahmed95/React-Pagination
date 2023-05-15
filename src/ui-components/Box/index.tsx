import styled, { StyledComponent } from 'styled-components';
import {
  background,
  border,
  color,
  flexbox,
  layout,
  position,
  shadow,
  space,
  textAlign,
  height,
  SpaceProps,
  ColorProps,
  LayoutProps,
} from 'styled-system';

type BoxProps = {
  background?: string;
  border?: string;
  color?: string;
  flexbox?: string;
  layout?: string;
  position?: string;
  shadow?: string;
  space?: string;
  textAlign?: string;
  height?: string;
} & SpaceProps & ColorProps & LayoutProps;


const Box = styled.div<BoxProps>`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}
  ${textAlign}
  ${height}
  
`;

Box.displayName = 'Box';

export default Box;
