import Label from "../Label/Label";
import { Element } from "./Select.style";
import { ISelectProps } from "./Select.types";

const Select: React.FC<ISelectProps> = ({
  id,
  label,
  name,
  value,
  options = [],
  onChange,
  style,
}) => {
  const SelectJSX = (
    <Element
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      style={style}
    >
      {options.map(({ _id, value }) => (
        <option key={_id} value={value}>
          {value}
        </option>
      ))}
    </Element>
  );

  if (label) {
    return (
      <Label label={label} htmlFor={id} style={style}>
        {SelectJSX}
      </Label>
    );
  }
  return SelectJSX;
};

export default Select;
