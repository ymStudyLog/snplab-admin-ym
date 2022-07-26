import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import {
  RadioStyledProps,
  ToggleStyledProps,
  CheckboxStyledProps,
  ButtonStyledProps,
} from "../types/Form.type";

export const StyledForm = styled.form`
  position: relative;
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
`;

export const SubTitle = styled.p`
  display: flex;
  justify-content: flex-start;
  font-size: 12px;
  color: var(--color-subtitle);
  margin-top: 8px;
`;

export const DataInput = styled.input`
  width: 90%;
  border-bottom: 1.5px solid var(--color-gray);
  padding-top: 12px;
  padding-bottom: 12px;

  &::placeholder {
    color: var(--color-gray);
  }
`;

export const NoneDisplayInput = styled.input`
  display: none;
`;

const StyledRadioLabel = styled.label<{ selected: boolean }>`
  width: 4rem;
  margin-right: 3rem;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-gray);
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      color: var(--color-black);
    `};
`;

export const RadioLabel = (props: RadioStyledProps) => (
  <StyledRadioLabel {...props}>{props.children}</StyledRadioLabel>
);

export const CheckBoxContainer = styled.div`
  height: 74px;
  padding: 5px 10px;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const StyledCheckboxLabel = styled.label<{ selected: boolean }>`
  border: 2px solid;
  border-radius: 20px;
  padding: 8px 10px;
  margin-left: 8px;
  color: var(--color-gray);
  font-size: 13px;
  cursor: pointer;

  ${(props) =>
    props.selected &&
    css`
      color: var(--color-black);
    `};
`;

export const CheckBoxLabel = (props: CheckboxStyledProps) => (
  <StyledCheckboxLabel {...props}>{props.children}</StyledCheckboxLabel>
);

export const DataToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledDiv = styled.div<{ agreement: boolean }>`
  display: flex;
  align-items: center;
  padding-right: 8px;
  color: var(--color-gray);
  cursor: pointer;

  ${(props) =>
    props.agreement &&
    css`
      color: var(--color-black);
    `};
`;

export const DataToggle = (props: ToggleStyledProps) => (
  <StyledDiv {...props}>{props.children}</StyledDiv>
);

const StyledPrivacyButtonLabel = styled.label<{ agreement: boolean }>`
  display: flex;
  align-items: center;
  padding-right: 8px;
  color: var(--color-gray);
  cursor: pointer;

  ${(props) =>
    props.agreement &&
    css`
      color: var(--color-black);
    `};
`;

export const ButtonLabel = (props: ButtonStyledProps) => (
  <StyledPrivacyButtonLabel {...props}>
    {props.children}
  </StyledPrivacyButtonLabel>
);

export const Positioner = styled.div`
  width: 90%;
  padding: 15px 0;
  margin: 0 auto;
  border-top: 2px solid var(--color-black);
`;

export const Stretcher = styled.div`
  font-weight: bold;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
`;

export const LinkButton = styled(Link)`
  padding: 0 5px;
  display: flex;
  align-items: center;
`;
