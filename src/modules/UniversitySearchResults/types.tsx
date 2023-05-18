export interface UniversitySearchResultProps {
  universities: UniversityProps[],
  filteredItems: UniversityProps[],
  getAllUniversities: () => void
}
export interface UniversityProps {
  name: string;
  country: string;
  web_pages: string[];
}

export interface UniversityListProps {
  isListEmpty: boolean;
  universityList: Array<UniversityProps>;
}

export interface SearchUniversityProps {
  searchUniversityByName: (name: string) => void;
}
