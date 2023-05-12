import React from 'react';
import { render, screen } from '@testing-library/react';
import UniversitySearchResult from './index';

describe('UniversitySearchResult component', () => {
  test('renders "Loading data..." when there is no data', () => {
    render(<UniversitySearchResult />);
    const loadingText = screen.getByText(/Loading data/i);
    expect(loadingText).toBeInTheDocument();
  });

  // xtest('renders UniversityList when there is data', () => {
  //   const universityData = [
  //     {
  //       name: 'Example University',
  //       country: 'USA',
  //       web_pages: ['https://www.example.edu']
  //     }
  //   ];
  //   render(<UniversitySearchResult />);
  //   const universityList = screen.getByTestId('university-list');
  //   expect(universityList).toBeInTheDocument();
  // });
});
