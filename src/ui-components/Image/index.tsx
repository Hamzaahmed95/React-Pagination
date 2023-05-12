import styled from 'styled-components';

interface InputProps {
  width?: string;
}

const Input = styled.img<InputProps>`
  width: ${(props) => props.width || '139px'};
`;

export default Input;
