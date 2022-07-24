import React from 'react';
import styled from 'styled-components';
import { PageTemplate, MobileSizeContainer } from '../styles/template';
import Form from '../components/form/Form';

type Props = {};

const ApplicationForm = (props: Props) => {
  return (
    <PageTemplate>
      <MobileSizeContainer>
        <FormHeader>
          <span>크라우드 워커에 지원하기 위해</span>
          <span>필요한 정보를 입력해 주세요</span>
        </FormHeader>
        <Form />
      </MobileSizeContainer>
    </PageTemplate>

    // <Body>
    //   <ParentContainer>
    //     <FormHeader>
    //       <span>크라우드 워커에 지원하기 위해</span>
    //       <span>필요한 정보를 입력해 주세요</span>
    //     </FormHeader>
    //     <Form />
    //   </ParentContainer>
    // </Body>
  );
};

export default ApplicationForm;

// id : number,
// name : string,
// gender : string,
// birthday : string,
// region: [
//   string,
//   string
// ],
// contact : number | string,
// email : string,
// transportation: string[],
// agreement: boolean,
// pass: boolean
// submitdate: string,

const Body = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
`;

const ParentContainer = styled.div`
  height: 70vh;
  width: 350px;
  margin: 35px 0 10px 0;
  min-height: auto;
  min-width: auto;
  background-color: #ffffff;
`;

const FormHeader = styled.p`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: bold;
`;
