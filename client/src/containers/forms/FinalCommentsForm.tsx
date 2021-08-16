import Grid from "../../components/layout/Grid/Grid";
import TextInput from "../../components/ui/TextInput/TextInput";
import { IUserForm } from "../../context/UserDetailsContext/UserFormContext";

const FinalCommentsForm: React.FC<{
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  formState: IUserForm;
}> = ({ onChange, formState }) => {
  return (
    <Grid gridTemplateColumns="60% 40%" gap=".5rem" justifyContent="stretch">
      <TextInput
        type="textarea"
        label="Comments"
        name="comments"
        value={formState.comments}
        onChange={onChange}
      />
    </Grid>
  );
};

export default FinalCommentsForm;
