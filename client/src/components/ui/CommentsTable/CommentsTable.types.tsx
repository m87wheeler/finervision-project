import { IUserForm } from "../../../context/UserDetailsContext/UserFormContext";

export interface IUserData extends IUserForm {
  id: number;
}

export interface ICommentsTableProps {
  data: IUserData[];
}
