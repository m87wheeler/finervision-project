import Grid from "../../components/layout/Grid/Grid";
import TextInput from "../../components/ui/TextInput/TextInput";
import { IUserForm } from "../../context/UserDetailsContext/UserFormContext";

const UserDetailsForm: React.FC<{
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formState: IUserForm;
}> = ({ onChange, formState }) => {
  return (
    <Grid
      gridTemplateRows="repeat(2, auto)"
      gridTemplateColumns="repeat(3, 1fr)"
      gridTemplateAreas={`
            'first surname .'
            'email . .'
          `}
      gap=".5rem"
    >
      <TextInput
        label="First Name"
        name="first_name"
        value={formState.first_name}
        onChange={onChange}
        style={{ gridArea: "first" }}
      />
      <TextInput
        label="Surname"
        name="surname"
        value={formState.surname}
        onChange={onChange}
        style={{ gridArea: "surname" }}
      />
      <TextInput
        type="email"
        label="Email Address"
        name="email"
        value={formState.email}
        onChange={onChange}
        style={{ gridArea: "email" }}
      />
    </Grid>
  );
};

export default UserDetailsForm;
