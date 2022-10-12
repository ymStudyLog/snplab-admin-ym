import axios, { AxiosResponse } from "axios";
import { DataType, FormType } from "../types/dataType";

const BASE_URL = "http://localhost:8000";

const snplabService = axios.create({ baseURL: `${BASE_URL}/region` });
export const getRegionData = async <T>(): Promise<T> => {
  const response: AxiosResponse<T> = await snplabService.get("");
  return response.data;
};

const applicantsService = axios.create({ baseURL: `${BASE_URL}/applicants` });
export const getApplicantsData = async <T>(
  tab: string = "?submitdate_gte=2022. 7. 01.&submitdate_lte=2022. 7. 31.",
  search: string = ""
): Promise<T> => {
  const response: AxiosResponse<T> = await applicantsService.get(`${tab}${search}`);
  return response.data;
};

export const postApplicantsData = async <T>(
  data: FormType
): Promise<T> => {
  const response: AxiosResponse<T> = await applicantsService.post("", data);
  return response.data;
};

export const patchApplicantsById = async <T>(
  id: number,
  data: { pass: boolean }
): Promise<T> => {
  const response: AxiosResponse<T> = await applicantsService.patch(`/${id}`, data);
  return response.data;
};
