import styled from 'styled-components';

export const SubmitButton = styled.button<{ disabled: boolean }>`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 15px;
  background-color: ${(props) => (props.disabled ? `var(--color-gray)` : `var(--color-dark-gray)`)};
  color: white;
  border-radius: 12px;
  font-weight: bold;
`;

//! Form 내용을 모두 채우지 않아도 지원 완료 확인버튼 누를 수 있게 임시로 만들어둠
// export const SubmitButton = styled.button`
//   width: 90%;
//   margin: 0 auto;
//   margin-bottom: 20px;
//   padding: 15px;
//   background-color: var(--color-main);
//   color: white;
//   border-radius: 12px;
//   font-weight: bold;
//   :disabled {
//     background-color: var(--color-gray);
//   }
// `;

export const PageTemplate = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: var(--color-white);
`;

export const MobileSizeContainer = styled.div`
  max-width: 350px;
  text-align: center;
  border: 1px solid var(--color-border);
`;
