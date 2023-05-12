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

// import url from '../../images/university.png'

interface ListProps {
  name: string;
  country: string;
  web_pages: string[];
}

interface CardsProps {
  List?: ListProps;
}

const Cards: React.FC<CardsProps> = ({ List }) => {
  if (List) {
    const { name, country, web_pages } = List;

    return (
      <CardWrapper>
        {/* <CardImage background={new URL("../../images/university.png", import.meta.url)} /> */}
        <CardTextWrapper>
          <CardTextTitle>{name}</CardTextTitle>
          <CardTextBody>{country}</CardTextBody>
        </CardTextWrapper>
        <CardStatWrapper>
          <CardStats>
            <LinkText target="blank" href={web_pages[0]}>
              {web_pages[0]}
            </LinkText>
          </CardStats>
        </CardStatWrapper>
      </CardWrapper>
    );
  } else {
    return null;
  }
};

export default Cards;
