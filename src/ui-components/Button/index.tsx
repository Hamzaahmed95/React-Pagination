import styled from 'styled-components';
import { layout, space, variant } from 'styled-system';
import { css, CSSObject } from '@styled-system/css'

type ButtonVariants = {
  primary: CSSObject;
  secondary: CSSObject;
};

const variants: ButtonVariants = {
  primary: {
    color: 'white',
    width: '7.5rem',
    backgroundColor: '#4373FC',
    borderRadius: '5px',
    border: 'none',
    ':hover:enabled': {
      color: '#4373FC',
      backgroundColor: 'white',
    },
    ':active:enabled': {
      backgroundColor: 'primary_800',
      borderColor: 'primary_800',
    },
  },
  secondary: {
    color: 'black',
    width: '5.5rem',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'black',
    backgroundColor: "white",
    borderRadius: '5px',
    ':hover:enabled': {
      color: 'black',
      backgroundColor: 'white',
    },
    ':active:enabled': {
      backgroundColor: 'primary_300',
      borderColor: 'primary_800',
    },
  },
};

const Button = styled.button<any>`
  ${variant({
  variants,
})}
  ${css({
  textDecoration: 'none',
  textAlign: 'center',
  borderRadius: 'md',
  cursor: 'pointer',
  display: 'block',
  textTransform: 'uppercase',
  outline: 'none',
})}
  ${layout}
  ${space}
  height:40px;
  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

export default Button;
