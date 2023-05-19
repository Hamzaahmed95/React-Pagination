
import { data } from "../mockdata/university_mock";
import { University } from "./types";


export const fetchUniversityData = (): Promise<Map<number, University[]>> => {
  try {
    const res: University[] = data;
    if (res && res.length > 0) {
      res.sort((a: University, b: University) => (a.country > b.country) ? 1 : -1)
      const universityMap = new Map();

      let universityItemArray: any = [];
      let univesityIndex = 0, currentIndex = 0;

      res.forEach((data, index) => {

        universityItemArray.push(data)
        currentIndex++;

        //50 items per page
        if (currentIndex === 50) {
          univesityIndex++;
          currentIndex = 0;
          universityMap.set(univesityIndex, universityItemArray);
          universityItemArray = []
        }
      })
      return Promise.resolve(universityMap)
    }
    throw res
  } catch (e) {
    console.log("Error: ", e)
    throw e
  }
}