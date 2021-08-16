import Grid from "../../components/layout/Grid/Grid";
import Select from "../../components/ui/Select/Select";
import TextInput from "../../components/ui/TextInput/TextInput";
import { IOption } from "../../components/ui/Select/Select.types";
import { IUserForm } from "../../context/UserDetailsContext/UserFormContext";

const MoreCommentsForm: React.FC<{
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  formState: IUserForm;
}> = ({ onChange, formState }) => {
  /** options for 'gender' select element */
  const genderOptions: IOption[] = [
    { _id: "0", value: "" },
    { _id: "1", value: "Male" },
    { _id: "2", value: "Female" },
    { _id: "3", value: "Non-binary" },
    { _id: "4", value: "Transgender" },
    { _id: "5", value: "Intersex" },
    { _id: "6", value: "Prefer not to say" },
    { _id: "7", value: "Other" },
  ];

  return (
    <Grid
      gridTemplateRows="repeat(2, auto)"
      gridTemplateColumns="repeat(3, 1fr)"
      gridTemplateAreas={`
            'tel gender .'
            'dob . .'
          `}
      gap=".5rem"
    >
      <TextInput
        type="tel"
        label="Telephone Number"
        name="phone"
        value={formState.phone}
        onChange={onChange}
        style={{ gridArea: "tel" }}
      />
      <Select
        label="Gender"
        name="gender"
        value={formState.gender}
        options={genderOptions}
        onChange={onChange}
        style={{ gridArea: "gender" }}
      />
      <Grid
        gridTemplateColumns="repeat(3, 3rem)"
        gridTemplateRows="auto auto"
        gap=".25rem"
        alignContent="flex-start"
        style={{ gridArea: "dob" }}
      >
        <label style={{ gridColumn: "1 / 4" }}>Date of birth</label>
        <TextInput
          type="number"
          name="dob"
          value={formState.dob}
          onChange={onChange}
          textAlign="center"
        />
        <TextInput
          type="number"
          name="mob"
          value={formState.mob}
          onChange={onChange}
          textAlign="center"
        />
        <TextInput
          type="number"
          name="yob"
          value={formState.yob}
          onChange={onChange}
          textAlign="center"
        />
      </Grid>
    </Grid>
  );
};

export default MoreCommentsForm;
