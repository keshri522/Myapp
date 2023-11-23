// export default ContactUs;
import React, { useState } from "react";
import ContactFrom from "../Component/Forms/ContactUs/Contactus";
import ContactDataApi from "../../src/Component/ApiFunctions/Api";
const ContactUs = () => {
  const [loading, Setloading] = useState(false);
  // creating the localState of the component that will be passed as a props to the child componets to resuable of the components
  const [formdata, Setformdata] = useState({
    name: "",
    email: "",
    textarea: "",
  });
  const [isChecked, SetisChecked] = useState(false);
  // this function prevent user from clicking the send message button without checking the checkbox
  const Checktrue = () => {
    SetisChecked((prevValue) => !prevValue);
  };
  // creating some functions which  is responsible for for button submit or onchange handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value); just for debugging
    Setformdata({ ...formdata, [name]: value });
  };
  const handleSubmit = (e) => {
    // prevent page to reload when  user clicks   send message button
    e.preventDefault();
    Setloading(true);
    // clear all the fields after submitting
    // calling an api to send all the data to the to database
    ContactDataApi(formdata)
      .then((res) => {
        if (res.status === 200) {
          setTimeout(() => {
            Setformdata({
              name: "",
              email: "",
              textarea: "",
            });
            SetisChecked(false); // to ucheck the the chekc box once submitted
            Setloading(false);
          }, 1000);
        }
      })
      .catch((error) => {
        Setloading(false);
        console.log(error);
      });
  };
  return (
    <>
      <ContactFrom
        isChecked={isChecked}
        Checktrue={Checktrue}
        loading={loading}
        formdata={formdata}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default ContactUs;
