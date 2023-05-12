import styled from 'styled-components';
import { Box } from '../index';

interface FlexProps {
  display: string

}

const Flex = styled(Box) <any>``;

Flex.propTypes = Box.propTypes;

Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
