export interface ISCElementProps {
  textAlign?: "left" | "center" | "right";
}

export interface ITextInputProps extends ISCElementProps {
  id?: string;
  label?: string;
  type?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "search"
    | "tel"
    | "textarea";
  name: string;
  value: any;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  style?: React.CSSProperties;
}
