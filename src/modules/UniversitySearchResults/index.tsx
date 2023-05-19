import React, { useEffect } from 'react';
import { Box } from '../../ui-components';
import { connect } from 'react-redux';
import UniversityList from './UniversityList/index';
import { getAllUniversities } from '../../actions/UniversitySearchResult';
import { searchUniversitySelector, getUniversitiesSelector } from '../../selectors/UniversitySearchList';
import { UniversitySearchResultProps } from './types'
import { RootState } from '../../store';
const UniversitySearchResult = (props: UniversitySearchResultProps) => {
  useEffect(() => {
    props.getAllUniversities()
  }, [])

  return (
    <Box className="university" data-testid="university-list" >
      <UniversityList isLoading={props.universities.length === 0} isListEmpty={props.filteredItems.length === 0} universityList={props.filteredItems} />
    </Box>
  )
};

const mapStateToProps = (state: RootState) => {
  return {
    universities: getUniversitiesSelector(state),
    filteredItems: searchUniversitySelector(state)
  };
};
export default connect(mapStateToProps, { getAllUniversities })(UniversitySearchResult);