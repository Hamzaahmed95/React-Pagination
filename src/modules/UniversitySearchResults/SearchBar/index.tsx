import React, { ChangeEvent } from 'react';
import { Input } from '../../../ui-components';
import { connect } from 'react-redux';
import { filterUniversityByName } from '../../../actions/UniversitySearchResult';


interface SearchUniversityProps {
  filterUniversityByName: (name: string) => void;
}

const SearchUniversity = (props: SearchUniversityProps) => {
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.filterUniversityByName(event.target.value);
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
  filterUniversityByName: (name: string) => filterUniversityByName(name),
};

export default connect(null, mapDispatchToProps)(SearchUniversity);

