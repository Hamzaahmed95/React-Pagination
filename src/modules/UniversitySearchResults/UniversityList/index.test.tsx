import React from 'react';
import { render, screen, act } from '@testing-library/react';
import UniversityList from './index';



describe('UniversitySearchResult component', () => {
  test('does not render UniversityItem component when passing empty university list', async () => {

    const props = {
      universityList: []
    }
    const {queryByTestId} = render(<UniversityList {...props} />)
    const text = queryByTestId('university-item')
    expect(text).toBeNull()
  }),

    test('it will render UniversityItem component when passing university list', async () => {

      const data = [{
        name: "university name",
        country: "university country",
        web_pages: ["hello world", "second link"]
      }]
      const props = {
        universityList: data
      }
      const {queryByTestId} = render(<UniversityList {...props} />)
      const text = queryByTestId('university-item')
      expect(text).not.toBeNull()
    })
})