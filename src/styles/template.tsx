import styled from "styled-components";

type Props = {
  children: React.ReactNode
};

const CenteredDiv = styled.div`
  width: 350px;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  background-color: white;
  align-items: center;
  position: fixed;
`;

export const PageTemplate = (props : Props) => <CenteredDiv {...props}>{props.children}</CenteredDiv>

//350px 변경 예정
const NarrowContainer = styled.div`
  max-width: 480px;
  text-align: center;
  border-left: 1px solid #d4d4d4;
  border-right: 1px solid #d4d4d4;
`;

export const MobileSizeContainer = (props: Props) => <NarrowContainer {...props}>{props.children}</NarrowContainer>