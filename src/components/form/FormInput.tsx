import { useFormContext } from "react-hook-form";
import * as FormStyle from "../../styles/Form.styled";

type Props = {
  name: string;
  placeholder: string;
  validOptions: any;
  value?: string | number | readonly string[] | undefined;
  onClick?: () => void;
  readOnly? : boolean;
};

const FormInput = (props: Props) => {
  const { placeholder, name, validOptions, value, onClick, readOnly } = props;
  const { register } = useFormContext();

  return (
    <FormStyle.DataInput
      {...register(name, validOptions)}
      name={name}
      placeholder={placeholder}
      value={value}
      onClick={onClick}
      readOnly={readOnly}
    />
  );
};

export default FormInput;
