import styled from 'styled-components';
import { typography, space, color } from 'styled-system';
import { TypographyProps, SpaceProps, ColorProps } from 'styled-system';
import { FC } from 'react';

interface TextProps extends TypographyProps, SpaceProps, ColorProps {}

const Text: FC<any> = styled.div<TextProps>`
  ${typography}
  ${space}
  ${color}
`;

export default Text;
