export const searchUniversitySelector = (state: any) => {
  const { universities, searchText } = state.universitySearchResult;
  return universities.filter((item: any) =>
    item.name.toLowerCase().startsWith(searchText.toLowerCase()) ||
    item.country.toLowerCase().startsWith(searchText.toLowerCase())
  )
}

export const getUniversitiesSelector = (state: any) => state.universitySearchResult.universities