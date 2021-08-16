import { Element } from "./Label.style";
import { ILabelProps } from "./Label.types";

const Label: React.FC<ILabelProps> = ({ label, htmlFor, style, children }) => {
  return (
    <Element htmlFor={htmlFor} style={style}>
      <span>{label}</span>
      {children}
    </Element>
  );
};

export default Label;
