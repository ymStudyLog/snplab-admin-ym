import axios, { AxiosInstance, AxiosResponse } from "axios";

const BASE_URL = "http://localhost:8000";

export const applyService = axios.create({ baseURL: `${BASE_URL}/applicants` });
export const regionService = axios.create({ baseURL: `${BASE_URL}/region` });
export const siDoService = axios.create({ baseURL: `${BASE_URL}/siDoList` });

export const getRegionData = async <T>(service: AxiosInstance): Promise<T> => {
  const response: AxiosResponse<T> = await service.get("");
  return response.data;
};

export const getSiDoData = async <T>(service: AxiosInstance): Promise<T> => {
  const response: AxiosResponse<T> = await service.get("");
  return response.data;
};

export const getApplicantsData = async <T>(
  service: AxiosInstance,
  tab: string = "?submitdate_gte=2022. 7. 01.&submitdate_lte=2022. 7. 31.",
  search: string = ""
): Promise<T> => {

  const response: AxiosResponse<T> = await service.get(`${tab}${search}`);
  return response.data;
};


/* data 형식 = {
id : number,
name : string,
gender : string,
birthday : string,
region: [
  string,
  string
],
contact : number | string,
email : string,
transportation: string[],
agreement: boolean,
pass: boolean
submitdate: string
} */
export const postApplicantsData = async <T>(
  service: AxiosInstance,
  data: any
): Promise<T> => {
  const response: AxiosResponse<T> = await service.post("", data);
  return response.data;
};

export const patchApplicantsById = async <T>(
  service: AxiosInstance,
  id: number,
  data: { pass: boolean }
): Promise<T> => {
  const response: AxiosResponse<T> = await service.patch(`/${id}`, data);
  return response.data;
};
