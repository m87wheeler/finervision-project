import Label from "../Label/Label";
import { Element, TextArea } from "./TextInput.style";
import { ITextInputProps } from "./TextInput.types";

const TextInput: React.FC<ITextInputProps> = ({
  id,
  label,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  textAlign = "left",
  style,
}) => {
  const InputJSX = (
    <Element
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      textAlign={textAlign}
    />
  );
  const TextAreaJSX = (
    <TextArea
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );

  if (label) {
    return (
      <Label label={label} htmlFor={id} style={style}>
        {type === "textarea" ? TextAreaJSX : InputJSX}
      </Label>
    );
  }
  return type === "textarea" ? TextAreaJSX : InputJSX;
};

export default TextInput;
