import React, { ChangeEvent } from 'react';
import { Input } from '../../../ui-components';
import { connect, ConnectedProps } from 'react-redux';
import { filterUniversityByName } from '../../../actions/UniversitySearchResult';
import RootState from '../../../reducers/index';


// Use the `typeof` operator to infer the prop types from the mapDispatchToProps object

type PropsFromRedux = ConnectedProps<typeof connector>;

// Define the component and its props
const SearchUniversity = (props: PropsFromRedux) => {
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    props.filterUniversityByName(input);
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
// Define the type for the props received from Redux
const mapStateToProps = (state: typeof RootState) => ({
  // Add any relevant props from the Redux state
});

const mapDispatchToProps = {
  filterUniversityByName: (name: string) => filterUniversityByName(name),
};
const connector = connect(mapStateToProps, mapDispatchToProps);


// Connect the component to Redux using the connector
export default connector(SearchUniversity);
