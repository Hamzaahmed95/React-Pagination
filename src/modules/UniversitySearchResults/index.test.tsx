import React from 'react';
import { render, screen, act } from '@testing-library/react';
import UniversitySearchResult from './index';
import { fetchUniversityData } from '../../api/UniversityList';
import { data } from '../../mockdata/university_mock';

jest.mock('../../api/UniversityList', () => ({
  fetchUniversityData: jest.fn(),
}));

describe('UniversitySearchResult component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('renders "Loading data..." when there is no data', async () => {

    (fetchUniversityData as jest.Mock).mockResolvedValue([]);
    render(<UniversitySearchResult />);
    const loadingText = await screen.findByText(/Loading data/i);
    expect(loadingText).toBeInTheDocument();

  });
  test('renders University List when data is rendered', async() => {
    (fetchUniversityData as jest.Mock).mockResolvedValue(data);
    render(<UniversitySearchResult />);
    const loadingText = await screen.findByTestId('university-list');
    expect(loadingText).toBeInTheDocument();
  });
})