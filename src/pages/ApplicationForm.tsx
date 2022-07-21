import React from "react";
import Form from "../components/Form";
import { PageTemplate } from "../styles/template";

type Props = {};

const ApplicationForm = (props: Props) => {
  return (
    <PageTemplate>
      <Form />
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
