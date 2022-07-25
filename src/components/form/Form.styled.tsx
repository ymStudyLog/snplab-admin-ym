import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// form의 title들에 사용한 컴포넌트(radioContariner제외)

export const Container = styled.div`
  position: relative;
  //height: 100vh;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
`;

export const DataTitle = styled.div`
  padding: 20px;
  font-weight: bold;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const DataTitleRow = styled(DataTitle)`
  flex-direction: row;
`;

export const RadioContainer = styled(DataTitleRow)`
  padding: 0;
  padding-left: 12px;
`; //form의 title에 사용한건 아니지만 DataTitle로 만든 컴포넌트라 여기에 넣음!

export const SubTitle = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  color: #9a9a9a;
  margin-top: 8px;
`;

//form의 input들에 사용한 컴포넌트
export const DataInput = styled.input`
  width: 90%;
  border-bottom: 1.5px solid #c4c4c4;
  padding-top: 12px;
  padding-bottom: 12px;

  &::placeholder {
    color: #c4c4c4;
  }
`;

export const NoneDisplayInput = styled.input`
  display: none;
`;

//radio에 사용한 label(RadioContainer는 맨 처음부분에 위치함)
const StyledLabel = styled.label<{ selected: boolean }>`
  width: 4rem;
  margin-right: 3rem;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #c4c4c4;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      color: black;
    `};
`;

type RadioProps = {
  selected: boolean;
  children: React.ReactNode;
  htmlFor: string;
  onClick: () => void;
};

export const RadioLabel = (props: RadioProps) => <StyledLabel {...props}>{props.children}</StyledLabel>;

//checkbox 컨테이너와 label
export const CheckBoxContainer = styled.div`
  height: 74px;
  padding: 5px 10px;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const CheckBoxLabel = styled.label`
  border: 2px solid;
  border-radius: 20px;
  padding: 8px 10px;
  margin-left: 8px;
  color: #c4c4c4;
  font-size: 13px;
  cursor: pointer;
`;

//개인정보 토글 컨테이너와 버튼
export const DataToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledDiv = styled.div<{ agreement: boolean }>`
  display: flex;
  align-items: center;
  padding-right: 8px;
  color: #c4c4c4;
  cursor: pointer;

  ${(props) =>
    props.agreement &&
    css`
      color: black;
    `};
`;

type ToggleProps = {
  agreement: boolean;
  children: JSX.Element;
  onClick: () => void;
};

export const DataToggle = (props: ToggleProps) => <StyledDiv {...props}>{props.children}</StyledDiv>;

//개인정보 토글 컨테이너와 버튼 포지셔닝 컴포넌트
export const Positioner = styled.div`
  width: 90%;
  padding: 15px 0;
  margin: 0 auto;
  border-top: 2px solid black;
`;

export const Stretcher = styled.div`
  font-weight: bold;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
`;

//routing 버튼 & submit 버튼
export const LinkButton = styled(Link)`
  padding: 0 5px;
  display: flex;
  align-items: center;
`;
