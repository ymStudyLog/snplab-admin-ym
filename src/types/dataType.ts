export type DataType = FormType & {
  id: number;
};

export type FormType = {
  name: string;
  gender: string;
  birthday: string;
  region: string[];
  contact: string;
  email: string;
  transportation: string[];
  agreement: boolean;
  pass: boolean;
  submitdate: string;
}