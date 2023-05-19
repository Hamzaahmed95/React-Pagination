import React from 'react';
import { Flex, Text } from '../../../ui-components';

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
      <Flex
        justifyContent="space-between"
        flexDirection='column'
        alignItems='space-between'
        p={3}
        m={3}
        width='15em'
        height='20em'
        border="solid"
        data-testid="university-item">
        <img
          height="200px"
          src={url}
          alt="university image" />
        <Flex flexDirection='column' alignItems='center' justifyContent="center">
          <Text fontFamily='mono'>{name}</Text>
          <Text fontFamily='mono'>{country}</Text>
        </Flex>
        <Flex justifyContent="center">
          <Flex >
            <a target="blank" href={web_pages[0]}>
              {web_pages[0]}
            </a>
          </Flex>
        </Flex>
      </Flex>
    );
  } else {
    return null;
  }
};

export default UniversityItem;
