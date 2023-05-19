import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import UniversitySearchResult from './index';
import { fetchUniversityData } from '../../api/UniversityList';
import { data } from '../../mockdata/short_data';
import customRendererWithStore from '../../__tests__/customRendererWithStore';
import store from '../../store';
import { getAllUniversities } from '../../actions/UniversitySearchResult';

jest.mock('../../api/UniversityList', () => ({
  fetchUniversityData: jest.fn(),
}));

describe('UniversitySearchResult component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('renders "Loading data..." when there is no data', async () => {

    (fetchUniversityData as jest.Mock).mockResolvedValue([]);
    const { queryByTestId } = customRendererWithStore(<UniversitySearchResult />);
    await waitFor(() => queryByTestId('loading-state'))
    const universityList = queryByTestId('loading-state');
    //
    expect(universityList).toBeInTheDocument();

  });
  test('renders University List when data is rendered', async () => {
    (fetchUniversityData as jest.Mock).mockResolvedValue(data);
    getAllUniversities()
    const { queryByTestId } = customRendererWithStore(<UniversitySearchResult />);
    await waitFor(() => queryByTestId('university-list'))
    const universityList = queryByTestId('university-list');
    expect(universityList).toBeInTheDocument();
  });
})