import axios, { AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:8000';

export const applyService = axios.create({ baseURL: `${BASE_URL}/applicants` });
export const regionService = axios.create({ baseURL: `${BASE_URL}/region` });
export const siDoService = axios.create({ baseURL: `${BASE_URL}/siDoList` });

/* regionService, get
 */
export const getRegionData = async <T>(service: AxiosInstance): Promise<T> => {
  const response: AxiosResponse<T> = await service.get('');
  return response.data;
};

export const getSiDoData = async <T>(service: AxiosInstance): Promise<T> => {
  const response: AxiosResponse<T> = await service.get('');
  return response.data;
};

/* api get database 불러오기
 * applyService.get(`{tab 특정기간}{검색창에 검색한 내용}`)
 */
export const getApplicantsData = async <T>(service: AxiosInstance, tab: string = '?submitdate_gte=2022.07.01&submitdate_lte=2022.07.31', search: string = ''): Promise<T> => {
  const response: AxiosResponse<T> = await service.get(`${tab}${search}`);
  return response.data;
};

/* applyService, post
 * data 형식 = {
id : number, => 고유 id 생성하는 법 찾기 useRef?
name : string,
gender : string,
birthday : string, (YYYY.MM.DD)
region: [
  string,
  string
],
contact : number | string,
email : string,
transportation: string[],
agreement: boolean,
pass: boolean
submitdate: string (YYYY.MM.DD)
 } 
 */
export const postApplicantsData = async <T>(service: AxiosInstance, data: any): Promise<T> => {
  const response: AxiosResponse<T> = await service.post('', data);
  return response.data; //필요함?
};

/* applyService, patch
 * data 형식 = { pass : !pass }
 */
export const patchApplicantsById = async <T>(service: AxiosInstance, id: number, data: { pass: boolean }): Promise<T> => {
  const response: AxiosResponse<T> = await service.patch(`?id=${id}`, data);
  return response.data; //필요함?
};
