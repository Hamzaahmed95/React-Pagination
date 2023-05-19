import React from 'react';
import { Flex } from '../ui-components';
import Pagination from '../modules/UniversitySearchResults/Pagination';

const Footer: React.FC = () => (
  <Flex className="footer" justifyContent="center" backgroundColor="#f4f0ff" height="7vh" >
    <Pagination />
  </Flex>
);

export default Footer;