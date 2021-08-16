import { createContext, useState } from "react";

export interface IUserForm {
  first_name: string;
  surname: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
  mob: string;
  yob: string;
  comments: string;
}

const initialState = {
  first_name: "",
  surname: "",
  email: "",
  phone: "",
  gender: "",
  dob: "",
  mob: "",
  yob: "",
  comments: "",
};

const userFormDefaultValue = {
  formState: initialState,
  setFormState: (formState: any) => {},
  initialState,
};

export const UserFormContext = createContext(userFormDefaultValue);

export const Provider: React.FC = ({ children }) => {
  const [formState, setFormState] = useState(userFormDefaultValue.formState);

  return (
    <UserFormContext.Provider value={{ formState, setFormState, initialState }}>
      {children}
    </UserFormContext.Provider>
  );
};
