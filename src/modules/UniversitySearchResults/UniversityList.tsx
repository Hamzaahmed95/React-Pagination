import React from 'react';
import { Box, Flex, Cards, Text } from '../../ui-components';

interface Props {
  isListEmpty: boolean;
  universityList: Array<University>;
}

interface University {
  name: string;
  country: string;
  web_pages: string[];
}

const UniversityList: React.FC<Props> = ({ isListEmpty, universityList }) => {
  if (isListEmpty) {
    return <Flex justifyContent="center" flexWrap="wrap">
      {universityList.map((university: University, index: number) => (
        <Box key={index} className="item">
          <Cards List={university} />
        </Box>
      ))}</Flex>
  } else {
    return <Flex paddingTop="24px"><Text>No university found</Text></Flex>;
  }
};

export default UniversityList;
