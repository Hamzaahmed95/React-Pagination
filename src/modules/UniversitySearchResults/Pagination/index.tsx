import React, { useState } from 'react';
import { Flex, Button, Box, Text } from '../../../ui-components';
import { connect } from 'react-redux';
import { RootState } from '../../../store';
import { UniversitySearchResultProps } from '../types';
import { getUniversitiesSelector } from '../../../selectors/UniversitySearchList';
import { incrementPage, decrementPage, goToThePage } from '../../../actions/UniversitySearchResult';

import { HiArrowSmLeft, HiArrowSmRight } from "react-icons/hi";

type PaginationProps = Pick<UniversitySearchResultProps, 'universities'> & {
  incrementPage: (index: number) => void
  decrementPage: (index: number) => void
  goToThePage: (index: number) => void
}
const Pagination = (props: PaginationProps) => {

  const [pageIndex, setPageIndex] = useState(1)
  const [pageArray, setPageArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  const goToNextPage = () => {
    if (pageIndex % 10 === 0) {

      let array = []
      for (let i = pageIndex + 1; i < pageIndex + 11; i++) {
        array.push(i);
      }
      setPageArray(array)
    }
    setPageIndex(pageIndex + 1)
    props.incrementPage(pageIndex + 1)
  }

  const goToPreviousPage = () => {
    if ((pageIndex - 1) % 10 === 0) {

      let array = []
      for (let i = pageIndex - 10; i < pageIndex; i++) {
        array.push(i);
      }
      setPageArray(array)
    }
    setPageIndex(pageIndex - 1)
    props.decrementPage(pageIndex - 1)
  }

  const goToExactPage = (index: number) => {
    setPageIndex(index + 1)
    props.goToThePage(index + 1)
  }

  return (
    <Flex className="pagination" justifyContent="center" alignItems="center" padding="20px" >
      <Button mx={3} variant="secondary" disabled={pageIndex === 1} onClick={goToPreviousPage}><Flex justifyContent="center" flexDirection='row'><HiArrowSmLeft /><Text>Prev</Text></Flex> </Button>

      <Flex alignItems="center" flexWrap="wrap" >
        {pageArray.map((element, index) => (
          <a
            onClick={() => goToExactPage(element - 1)}
            style={{
              padding: "6px 10px 6px 10px",
              color: element === pageIndex ? "white" : "black",
              borderRadius: "6px",
              background: element === pageIndex ? "#0969da" : "white",
              textDecoration: "none"
            }
            }
            key={index}
            href='#'>
            {element}
          </a>
        ))}
      </Flex>
      <Button mx={3} variant="secondary" disabled={pageIndex >= props.universities.length} onClick={goToNextPage}><Flex justifyContent="center" flexDirection='row'><Text>Next</Text><HiArrowSmRight /></Flex></Button>
    </Flex>
  );
};
const mapStateToProps = (state: RootState) => (
  { universities: getUniversitiesSelector(state) }
)

export default connect(mapStateToProps, { incrementPage, decrementPage, goToThePage })(Pagination);
