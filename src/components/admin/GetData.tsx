//삭제될 컴포넌트

import React from "react";
import { applyService, patchApplicantsById } from "../../api/api";
import { ApplyProps } from "../../types/Apply.type";

type Props = {
  item: ApplyProps;
};

const GetData = ({ item }: Props) => {
  const [getItem, setGetItem] = React.useState(item);
  const handleClickCheckBtn = () => {
    const temp = { ...getItem };
    patchApplicantsById(applyService, item.id!, { pass: !getItem.pass }).catch(
      () => {
        setGetItem(temp);
      }
    );
    setGetItem({ ...getItem, pass: !getItem.pass });
  };
  return (
    <div>
      {getItem.submitdate}
      {getItem.name}
      {getItem.gender}
      {getItem.birthday}
      {getItem.contact}
      {getItem.email}
      {getItem.transportation}
      <button onClick={handleClickCheckBtn}>
        {getItem.pass ? "true" : "false"}
      </button>
    </div>
  );
};

export default GetData;
