//TODO Form 컴포넌트 분리 완료하고 나서 type들 Form 컴포넌트에 합치기 -> 이파일은 삭제
export type RadioState = {
  female: boolean;
  male: boolean;
};

export type PolicyState = {
  privacy: boolean;
  thirdparty: boolean;
};

export type CheckboxState = boolean[];

//TODO 생일 연락처 왜 number냐? react hook form 에서 string으로 반환하나..? 찾아보고 아니면 수정해서 DataType 하나로 써라
//운송수단 type이 뭐냐 대체 any는 쓰지말고 왠만하면
export type IFormInputs = {
  name: string;
  birthday: number;
  contact: number;
  email: string;
  gender: string;
  region: string[];
  transportation: any;
  agreement: boolean;
  pass: boolean;
};
