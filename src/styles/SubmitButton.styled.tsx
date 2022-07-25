import styled, { css } from "styled-components";

export const SubmitButton = styled.button<{ disabled: boolean }>`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 15px;
  background-color: ${(props) =>
    props.disabled ? css`var(--color-gray)` : css`var(--color-dark-gray)`};
  color: white;
  border-radius: 12px;
  font-weight: bold;
`;
