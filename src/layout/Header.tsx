import React from 'react';
import { Flex } from '../ui-components';
import SearchUniversity from '../modules/UniversitySearchResults/SearchBar/index';
import "./index.css"

const Header: React.FC = () => (
  <Flex className="header" justifyContent="center" backgroundColor="#4373FC" height="7vh" >
    <SearchUniversity />
  </Flex>
)

export default Header;