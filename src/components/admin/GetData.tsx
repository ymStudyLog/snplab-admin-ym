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
      <li>name : {getItem.name}</li>
      <li>contanct : {getItem.contact}</li>
      <button onClick={handleClickCheckBtn}>
        {getItem.pass ? "true" : "false"}
      </button>
    </div>
  );
};

export default GetData;
