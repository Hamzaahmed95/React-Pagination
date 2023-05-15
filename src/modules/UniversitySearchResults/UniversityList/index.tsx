import React from 'react';
import { Box, Flex, Text } from '../../../ui-components';
import UniversityItem from '../UniversityItem/index';

interface Props {
  isListEmpty: boolean;
  universityList: Array<University>;
}

interface University {
  name: string;
  country: string;
  web_pages: string[];
}

const UniversityList: React.FC<Omit<Props, "isListEmpty">> = ({ universityList = [] }) => {

  return (
    <Flex justifyContent="center" flexWrap="wrap">
      {universityList.map((university: University, index: number) => (
        <Box key={index} className="item">
          <UniversityItem List={university} />
        </Box>
      ))}
    </Flex>
  )

};

export default UniversityList;
