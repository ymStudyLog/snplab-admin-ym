//! 왜인지 모르겠으나 이걸로 하면 에러남...
// export type RegionDataType = {
//   [key: string]: string[];
// };

export type RegionDataType = {
  [key: string]: any;
};

//! 정의 해 두었지만 사용시 에러남
export type RegionProps = {
  siDo: string;
  siGuGun: string[];
};

export type siDoListProps = string[];
