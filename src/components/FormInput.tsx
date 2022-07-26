import React from "react";
import { useFormContext } from "react-hook-form";
import * as FormStyle from "./Form.styled";

type Props = {
  placeholder: string;
  name: string;
  options: any;
};

const FormInput = ({ placeholder, name, options }: Props) => {
  const { register } = useFormContext();

  return (
    <>
      <FormStyle.DataInput
        placeholder={placeholder}
        {...register(name, options)}
      />
    </>
  );
};

export default FormInput;

//TODO! 수정해야함
FormInput.defaultProps = {
  type: "text",
  label: "",
  value: "",
};
