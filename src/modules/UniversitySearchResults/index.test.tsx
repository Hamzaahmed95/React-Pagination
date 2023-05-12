import React from 'react';
import { render, screen } from '@testing-library/react';
import UniversitySearchResult from './index';

describe('UniversitySearchResult component', () => {
  test('renders "Loading data..." when there is no data', () => {
    render(<UniversitySearchResult />);
    const loadingText = screen.getByText(/Loading data/i);
    expect(loadingText).toBeInTheDocument();
  });
});
