import styled from 'styled-components';

interface InputProps {
  setHeight?: string;
  inputColor?: string;
}

const Input = styled.input<InputProps>`
  padding: 1em;
  margin: 1em;
  width: 25em;
  height: ${props => props.setHeight || '2em'};
  color: ${props => props.inputColor || 'grey'};
  @media (max-width: 768px) {
    height: 0em;
    width: 12em;
    em;
  }
  background: white;
  border: solid #ADD8E6;
  border-radius: 12px;
`;

export default Input;
