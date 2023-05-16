import React, { ChangeEvent } from 'react';
import { Input } from '../../../ui-components';

const SearchUniversity: React.FC = () => {
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
  }
  return <Input setHeight="12px" onChange={onSearchChange} placeholder="Search by country or university name" type="text" />

};


export default SearchUniversity