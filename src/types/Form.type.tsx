export type RadioState = {
  female: boolean;
  male: boolean;
};

export type RadioStyledProps = {
  selected: boolean;
  children: React.ReactNode;
  htmlFor: string;
  onClick: () => void;
};

export type PolicyState = {
  privacy: boolean;
  thirdparty: boolean;
};

export type CheckboxState = boolean[];

export type CheckboxStyledProps = {
  htmlFor: string;
  key: number;
  children: React.ReactNode;
  selected: boolean;
  onClick: () => void;
};

export type ToggleStyledProps = {
  agreement: boolean;
  children: JSX.Element;
  onClick: () => void;
};

export type ButtonStyledProps = {
  agreement: boolean;
  children: React.ReactNode;
};
