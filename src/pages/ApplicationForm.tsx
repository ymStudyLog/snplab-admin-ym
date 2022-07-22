import React from "react";
import styled from "styled-components";
import { PageTemplate, MobileSizeContainer } from "../styles/template";
import Form from "../components/Form";

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

const FormHeader = styled.p`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: bold;
`;
