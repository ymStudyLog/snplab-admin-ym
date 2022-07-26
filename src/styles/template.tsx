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
  background-color: var(--color-main);
  color: white;
  border-radius: 12px;
  font-weight: bold;
  :disabled {
    background-color: var(--color-gray);
  }
`;

export const PageTemplate = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: var(--color-white);

  //! Body (연진)
  /* height: 70vh;
  width: 350px;
  margin: 35px 0 10px 0;
  min-height: auto;
  min-width: auto;
  background-color: #ffffff; */
`;

export const MobileSizeContainer = styled.div`
  max-width: 350px;
  text-align: center;
  border: 1px solid var(--color-border);
  /* border-left: 1px solid #d4d4d4;
  border-right: 1px solid #d4d4d4; */

  //! ParentContainer (연진)
  /* border: 1px solid #d4d4d4;
  height: 70vh;
  width: 350px;
  margin: 35px 0 10px 0;
  min-height: auto;
  min-width: auto;
  background-color: #ffffff; */
`;
