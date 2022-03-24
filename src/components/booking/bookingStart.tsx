import { useState } from "react";
import { useRouter } from "next/router";
import Card from "../../widgets/card";
import Form from "../../widgets/form";
import i18n from "../../language/en";

const BookingStart = () => {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    const userData = {
      fullName,
      email,
      phoneNumber,
    };

    console.log("User data: ", userData);

    // TODO: validate user data
    router.push("/bookings/new");
  };

  const changeFullNameHandler = (event: any) => {
    setFullName(event.target.value);
  };

  const changeEmailHandler = (event: any) => {
    setEmail(event.target.value);
  };

  const changePhoneNumberHandler = (event: any) => {
    setPhoneNumber(event.target.value);
  };

  const formData = {
    formHeader: {
      title: i18n.home.hero.bookingStart.title,
      description: i18n.home.hero.bookingStart.description,
    },
    formActions: {
      submitHandler: onSubmitHandler,
      submit: i18n.home.hero.bookingStart.continueButton,
      cancel: null,
    },
    formControl: [
      {
        inputTag: "input",
        inputLabel: i18n.home.hero.bookingStart.fullName,
        inputType: "text",
        inputId: "fullName",
        inputValue: fullName,
        inputChangeHandler: changeFullNameHandler,
      },
      {
        inputTag: "input",
        inputLabel: i18n.home.hero.bookingStart.phoneNumber,
        inputType: "phone",
        inputId: "phoneNumber",
        inputValue: phoneNumber,
        inputChangeHandler: changePhoneNumberHandler,
      },
      {
        inputTag: "input",
        inputLabel: i18n.home.hero.bookingStart.email,
        inputType: "email",
        inputId: "email",
        inputValue: email,
        inputChangeHandler: changeEmailHandler,
      },
    ],
  };

  return (
    <Card>
      <Form formData={formData} />
    </Card>
  );
};

export default BookingStart;
