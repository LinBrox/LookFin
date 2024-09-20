import axios from "axios";
import { CompanySearch } from "./company";

interface SearchResponse {
  data: CompanySearch[];
};

export const searchCompanies = async (query: string) => {
  try {
    const response = await axios.get<SearchResponse>(
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
    );
    return response.data; // Return the actual data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Error Message: ", error.message);
      return error.message;
    } else {
      console.log("Unexpected Error: ", error);
      return "An Unexpected Error has occurred";
    }
  }
};
