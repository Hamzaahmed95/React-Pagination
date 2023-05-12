import React, { useEffect, useState } from 'react';
import { data as universityData } from '../../mockdata/university_mock';
import { Box } from '../../ui-components';
import { fetchUniversityData } from '../../api/UniversityList';
import UniversityList from './UniversityList';

type University = {
  name: string,
  country: string,
  web_pages: string[]
}

const UniversitySearchResult: React.FC = () => {

 
  const [data, setData] = useState<University[]>([])

  useEffect(() => {
    fetchUniversityData().then((res: any) => setData(res))
  }, [])
  if (data.length === 0) return <h1>Loading data</h1>
 

  return (
    <Box data-testid="university-list" >
      <UniversityList isListEmpty={true} universityList={universityData} />
    </Box>
  )
};

export default UniversitySearchResult;