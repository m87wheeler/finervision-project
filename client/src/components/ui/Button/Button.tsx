import { Element } from "./Button.style";
import { IButtonProps } from "./Button.types";

const Button: React.FC<IButtonProps> = ({ onClick, style, children }) => {
  return (
    <Element onClick={onClick} style={style}>
      {children}
    </Element>
  );
};

export default Button;
