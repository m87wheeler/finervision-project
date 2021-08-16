import { useState, useContext, useEffect } from "react";

/** data, context and utils */
import {
  IUserForm,
  UserFormContext,
} from "../../context/UserDetailsContext/UserFormContext";
import { isValidEmail } from "../../util/helpers/isValidEmail";
import { isValidPhone } from "../../util/helpers/isValidPhone";

/** components */
import Accordion from "../../components/ui/Accordion/Accordion";
import UserDetailsForm from "../forms/UserDetailsForm";
import MoreCommentsForm from "../forms/MoreCommentsForm";
import FinalCommentsForm from "../forms/FinalCommentsForm";
import ErrorText from "../../components/ui/ErrorText/ErrorText";

const UserAccordion = () => {
  const { formState, setFormState, initialState } = useContext(UserFormContext);
  const [currentView, setCurrentView] = useState<number>(0);
  const [error, setError] = useState<{
    status: boolean;
    message: string;
    name: [] | string[];
  }>({
    status: false,
    message: "",
    name: [],
  });

  // TODO house all handlers for UserAccordionUsage to reduce code size
  /** confirm inputs are not empty before proceeding */
  const inputConfirmation = (
    names: Array<keyof typeof formState> = []
  ): boolean => {
    let noValue = names.filter((name) => !formState[name]);
    if (noValue.length) {
      setError({
        status: true,
        message: "Complete all required fields",
        name: [...noValue],
      });
      return false;
    }
    return true;
  };

  /** validate 'details' input vs RegExp / min length / etc.  */
  const validateDetailsInput = (): boolean => {
    if (formState.first_name.length < 2) {
      setError((error) => ({
        status: true,
        message: "First Name must contain a minimum of 2 characters.",
        name: [...error.name, "first_name"],
      }));
      return false;
    }
    if (formState.surname.length < 2) {
      setError({
        status: true,
        message: "Surname must contain a minimum of 2 characters.",
        name: [...error.name, "surname"],
      });
      return false;
    }
    if (!isValidEmail(formState.email)) {
      setError({
        status: true,
        message: "Invalid email format.",
        name: [...error.name, "email"],
      });
      return false;
    }
    return true;
  };

  /** validate 'more comments' input vs RegExp / min length / etc.  */
  const validateMoreCommentsInput = (): boolean => {
    if (!isValidPhone(formState.phone)) {
      setError({
        status: true,
        message: "Invalid phone number format.",
        name: [...error.name, "phone"],
      });
      return false;
    }
    if (parseInt(formState.dob) > 31 || parseInt(formState.dob) < 1) {
      setError({
        status: true,
        message: "Invalid date value.",
        name: [...error.name, "dob"],
      });
      return false;
    }
    if (parseInt(formState.mob) > 12 || parseInt(formState.mob) < 1) {
      setError({
        status: true,
        message: "Invalid month value.",
        name: [...error.name, "mob"],
      });
      return false;
    }
    if (parseInt(formState.yob) < 0) {
      setError({
        status: true,
        message: "Invalid year value.",
        name: [...error.name, "yob"],
      });
      return false;
    }
    return true;
  };

  /** handle input from user to update state */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((formState: IUserForm) => ({
      ...formState,
      [name]: value,
    }));
  };

  /** handle async submission of data to server / database */
  const handleSubmit = async () => {
    try {
      const req = await fetch("http://localhost:3000/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      const res = await req.json();
      if (res.success) {
        alert(res.message);
        setFormState(initialState);
        setCurrentView(0);
      }
    } catch (error) {
      setError({ status: true, message: error.message, name: [] });
    }
  };

  /** jump to next accordion section and validate input */
  const handleNext = () => {
    switch (currentView) {
      case 0:
        if (!inputConfirmation(["first_name", "surname", "email"])) return;
        if (!validateDetailsInput()) return;
        setCurrentView(1);
      case 1:
        if (!inputConfirmation(["phone", "gender", "dob", "mob", "yob"]))
          return;
        if (!validateMoreCommentsInput()) return;
        setCurrentView(2);
      case 2:
        if (!inputConfirmation(["comments"])) return;
        handleSubmit();
      default:
        break;
    }
  };

  /** move between accordion sections by clicking banner */
  const handleSelectSection = (n: number) => {
    if (currentView >= n) {
      setCurrentView(n);
    } else if (currentView < n) {
      handleNext();
    }
  };

  /** accordion form views */
  /** passed as prop to Accordion component */
  const ACCORDION_VIEWS = [
    {
      _id: "view-1",
      title: "Step 1: Your Details",
      component: (
        <UserDetailsForm onChange={handleChange} formState={formState} />
      ),
    },
    {
      _id: "view-2",
      title: "Step 2: More Comments",
      component: (
        <MoreCommentsForm onChange={handleChange} formState={formState} />
      ),
    },
    {
      _id: "view-3",
      title: "Step 3: Final Comments",
      component: (
        <FinalCommentsForm onChange={handleChange} formState={formState} />
      ),
    },
  ];

  /** reset error on 'currentView' update */
  useEffect(() => {
    setError({
      status: false,
      message: "",
      name: [],
    });
  }, [currentView]);

  return (
    <>
      <Accordion
        views={ACCORDION_VIEWS}
        onNext={handleNext}
        onSubmit={handleNext}
        onSelect={handleSelectSection}
        activeView={currentView}
      />
      <ErrorText error={error.status}>
        {error.status ? error.message : ""}
      </ErrorText>
    </>
  );
};

export default UserAccordion;
