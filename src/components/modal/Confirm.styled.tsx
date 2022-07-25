import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 15vh;
  border: none;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Text = styled.div`
  padding-left: 30px;
  padding-top: 30px;
  font-weight: bold;
`;

export const Navigate = styled.button`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  margin-right: 30px;
  color: var(--color-red);
  font-weight: bold;
`;
