import React, { useEffect } from 'react';
import { Box } from '../../ui-components';
import { connect } from 'react-redux';
import UniversityList from './UniversityList/index';
import { getAllUniversities } from '../../actions/UniversitySearchResult';
import { searchUniversitySelector, getUniversitiesSelector } from '../../selectors/UniversitySearchList';

const UniversitySearchResult = (props: any) => {
  useEffect(() => {
    props.getAllUniversities()
  }, [])

  if (props.universities.length === 0) {
    return <h1>Loading data</h1>
  }
  return (
    <Box data-testid="university-list" >
      <UniversityList isListEmpty={props.filteredItems.length === 0} universityList={props.filteredItems} />
    </Box>
  )
};

const mapStateToProps = (state: any) => {
  return {
    universities: getUniversitiesSelector(state),
    filteredItems: searchUniversitySelector(state)
  };
};
export default connect(mapStateToProps, { getAllUniversities })(UniversitySearchResult);

