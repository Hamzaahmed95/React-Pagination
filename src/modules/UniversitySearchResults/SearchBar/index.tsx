import React, { ChangeEvent } from 'react';
import { Input } from '../../../ui-components';
import { connect } from 'react-redux';
import { searchUniversityByName } from '../../../actions/UniversitySearchResult';
import { SearchUniversityProps } from '../types';


const SearchUniversity = (props: SearchUniversityProps) => {
  
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.searchUniversityByName(event.target.value);
  };

  return (
    <Input
      setHeight="12px"
      onChange={onSearchChange}
      placeholder="Search by country or university name"
      type="text"
    />
  );
};

const mapDispatchToProps = {
  searchUniversityByName: (name: string) => searchUniversityByName(name),
};

export default connect(null, mapDispatchToProps)(SearchUniversity);

