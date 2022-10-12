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
