import React from "react";
import { useFormContext } from "react-hook-form";
import * as FormStyle from "../../styles/Form.styled";

type Props = {
  placeholder: string;
  name: string;
  options: any;
  onClick?: () => void;
  value?: string;
};

const FormInput = ({ placeholder, name, options, onClick, value }: Props) => {
  const { register } = useFormContext();

  return (
    <>
      <FormStyle.DataInput
        placeholder={placeholder}
        onClick={onClick}
        value={value}
        {...register(name, options)}
      />
    </>
  );
};

export default FormInput;
