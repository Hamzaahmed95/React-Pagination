
import { data } from "../mockdata/university_mock";

export const fetchUniversityData = async () => {
  try {
    const res: any = data;
    if (res && res.length > 0) {

      res.sort((a: any, b: any) => (a.country > b.country) ? 1 : -1)

      return res
    }
    throw res
  } catch (e) {
    console.log("Error: ", e)
  }
}