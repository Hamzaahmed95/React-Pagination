import React from 'react';
import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText,
} from './style';
import { Box, Flex, Text } from '../../../ui-components';

const url = require('../../../images/university.jpg')

interface ListProps {
  name: string;
  country: string;
  web_pages: string[];
}

interface CardsProps {
  List?: ListProps;
}

const UniversityItem: React.FC<CardsProps> = ({ List }) => {
  if (List) {
    const { name, country, web_pages } = List;

    return (
      <Box p={3} data-testid="university-item">
        <img height={180} src={url} alt="university image" />
        <Flex>
          <Text>{name}</Text>
          <Text>{country}</Text>
        </Flex>
        <Flex>
          <Flex>
            <Text target="blank" href={web_pages[0]}>
              {web_pages[0]}
            </Text>
          </Flex>
        </Flex>
      </Box>
    );
  } else {
    return null;
  }
};

export default UniversityItem;
