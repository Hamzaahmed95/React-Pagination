import React from 'react';
import { Box, Flex, Text } from '../../../ui-components';
import UniversityItem from '../UniversityItem/index';
import { UniversityProps, UniversityListProps } from '../types';

const UniversityList: React.FC<UniversityListProps> = ({ isListEmpty, universityList = [] }) => {
  if (!isListEmpty) {
    return (
      <Flex justifyContent="center" flexWrap="wrap">
        {universityList.map((university: UniversityProps, index: number) => (
          <Box key={index} className="item">
            <UniversityItem List={university} />
          </Box>
        ))}
      </Flex>
    )
  }
  else {
    return <Flex paddingTop="24px"><Text fontSize="24px" >No university found</Text></Flex>;
  }
};

export default UniversityList;
