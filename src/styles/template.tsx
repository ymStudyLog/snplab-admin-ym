import styled from 'styled-components';

// type Props = {
//   children: React.ReactNode;
// };

export const PageTemplate = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: white;

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
  border: 1px solid #d4d4d4;
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

//export const PageTemplate = (props : Props) => <CenteredDiv {...props}>{props.children}</CenteredDiv>
// export const MobileSizeContainer = (props: Props) => <NarrowContainer {...props}>{props.children}</NarrowContainer>
