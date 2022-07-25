import styled, { css } from "styled-components";

// export const SubmitButton = styled.button<{ disabled: boolean }>`
//   width: 90%;
//   margin: 0 auto;
//   margin-bottom: 20px;
//   padding: 15px;
//   background-color: ${(props) =>
//     props.disabled ? css`var(--color-gray)` : css`var(--color-dark-gray)`};
//   color: white;
//   border-radius: 12px;
//   font-weight: bold;
// `;

//! Form 내용을 모두 채우지 않아도 지원 완료 확인버튼 누를 수 있게 임시로 만들어둠
export const SubmitButton = styled.button`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #fd8397;
  color: white;
  border-radius: 12px;
  font-weight: bold;
  :disabled {
    background-color: #31393d;
  }
`;
