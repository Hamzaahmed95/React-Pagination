
import { data } from "../mockdata/university_mock";
import { University } from "./types";


export const fetchUniversityData = (): Promise<University[]> => {
  try {
    const res: University[] = data;
    if (res && res.length > 0) {
      res.sort((a: University, b: University) => (a.country > b.country) ? 1 : -1)
      return Promise.resolve(res)
    }
    throw res
  } catch (e) {
    console.log("Error: ", e)
    throw e
  }
}