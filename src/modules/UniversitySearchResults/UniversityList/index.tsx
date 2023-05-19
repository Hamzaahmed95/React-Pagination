import React from 'react';
import { Box, Flex, Text } from '../../../ui-components';
import UniversityItem from '../UniversityItem/index';
import { UniversityProps, UniversityListProps } from '../types';
import { Instagram } from 'react-content-loader';

const UniversityList: React.FC<UniversityListProps> = ({ isLoading, isListEmpty, universityList = [] }) => {
  if (isLoading) {
    return (
      <Flex data-testid="loading-state" py={2} px={4} flexDirection='row' justifyContent="center" flexWrap="wrap">
        {Array(24).fill(0).map((item, index) => <Instagram key={index} width={300} backgroundColor={'#D3D3D3'} height={300} />)}
      </Flex>

    )
  }
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
    return <Flex justifyContent="center" paddingTop="24px"><Text fontSize="24px" >No university found</Text></Flex>;
  }
};

export default UniversityList;
