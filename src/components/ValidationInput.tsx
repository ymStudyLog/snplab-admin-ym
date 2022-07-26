//TODO : 삭제예정
import React, { useState } from "react";
import * as FormStyle from "../components/form/Form.styled"

export default function ValidationInput({
  label,
  type,
  value,
  maxValue,
  setValue,
  regexCheck,
  errorText,
  defaultText,
  placeholder,

}:any) {
  const [isError, setIsError] = useState(false);
  const [helperText, setHelperText] = useState(defaultText);

  
  const HandleOnChange = (e: { target: { value: string | any[]; }; }) => {
    //최대값이 지정되어있으면 value를 저장하지 않는다.
    if (maxValue && maxValue < e.target.value.length) return;

    setValue(e.target.value);

    //공백인 경우 defaultText로 바꾼다.
    if (e.target.value === "") {
      return setHelperText(defaultText);
    }
 
    if (regexCheck) {
      // 정규표현식체크가 통과되면 successText를 송출하고 아니면 errorText를 송출한다
      if (regexCheck.test(e.target.value)) {
        return setIsError(false);
      }else{
        setIsError(true);
        setHelperText(errorText);
      }
    }
  };
  
  return (
    <div>
         <FormStyle.DataInput
        type={type}
        onChange={HandleOnChange}
        value={value}
        placeholder={placeholder}
      />
      {isError&&<div>{helperText}</div>}
    </div>
  );
}

ValidationInput.defaultProps = {
  type: "text",
  label: "",
  value: ""
};

