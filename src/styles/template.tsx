import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

export const PageTemplate = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: white;
`;

//export const PageTemplate = (props : Props) => <CenteredDiv {...props}>{props.children}</CenteredDiv>

export const MobileSizeContainer = styled.div`
  max-width: 350px;
  text-align: center;
  border-left: 1px solid #d4d4d4;
  border-right: 1px solid #d4d4d4;
`;

// export const MobileSizeContainer = (props: Props) => <NarrowContainer {...props}>{props.children}</NarrowContainer>
