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
