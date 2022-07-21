import styled from "styled-components";

type Props = {
  children: React.ReactNode
};

const HorizontalCenterDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: white;
`;

export const PageTemplate = (props : Props) => <HorizontalCenterDiv {...props}>{props.children}</HorizontalCenterDiv>