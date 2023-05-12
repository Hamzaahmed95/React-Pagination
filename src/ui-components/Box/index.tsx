
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
} from 'styled-system';


const Box: StyledComponent<'div', any> = styled.div`
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
