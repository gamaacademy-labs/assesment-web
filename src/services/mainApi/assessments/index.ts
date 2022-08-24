import { Assessment } from "../../../types";
import { api } from "../../mainApi";

export const getAssessment= async (id: string): Promise<Assessment> => {
  try {
    const response = await api.get<Assessment>(`/assessment/assessment/${id}`);
    return response.data;    
  } catch (error) {
    return Promise.reject(error);
  }
};
