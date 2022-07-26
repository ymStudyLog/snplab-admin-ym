import React from "react";

import {
  applyService,
  getApplicantsData,
  patchApplicantsById,
} from "../../api/api";

import { ApplyProps } from "../../types/Apply.type";
import GetData from "./GetData";

type Props = {};

const GetItem = (props: Props) => {
  const [clientData, setClientData] = React.useState<ApplyProps[]>([]);
  React.useEffect(() => {
    getApplicantsData<ApplyProps[]>(applyService).then((data) => {
      setClientData(data);
    });
  }, []);
  return (
    <div>
      {clientData?.map((item: ApplyProps) => (
        <GetData item={item} key={item.id} />
      ))}
    </div>
  );
};

export default GetItem;
