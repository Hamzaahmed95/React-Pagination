import { RootState } from "../store";

export const searchUniversitySelector = (state: RootState) => {
  const { universities, searchText } = state.universitySearchResult;
  return universities.filter((item: any) =>
    item.name.toLowerCase().startsWith(searchText.toLowerCase()) ||
    item.country.toLowerCase().startsWith(searchText.toLowerCase())
  )
}

export const getUniversitiesSelector = (state: RootState) => state.universitySearchResult.universities