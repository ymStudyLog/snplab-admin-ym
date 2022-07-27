import styled from "styled-components";

export const PrivacyContainer = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const PrivacyHeader = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1.5px solid var(--color-border);
`;

export const Title = styled.h1`
  padding: 10px;
`;

export const GoBackButton = styled.button`
  border: none;
  background: none;
  width: 100%;
  height: 100%;
`;

export const PrivacyIntro = styled.div`
  white-space: pre-line;
  text-align: start;
  line-height: 20px;
  padding: 15px;
  color: var(--color-subtitle);
`;

export const PrivacyMain = styled(PrivacyIntro)`
  color: var(--color-privacy);
`;

export const PrivacyTitle = styled.h1`
  text-align: start;
  font-size: 25px;
  margin-top: 8px;
  padding-left: 15px;
`;

export const PrivacyTitleBold = styled(PrivacyTitle)`
  margin-top: 45px;
  font-weight: bold;
`;
