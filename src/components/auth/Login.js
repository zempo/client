import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginFormSchema from "./validation/loginFormSchema";
import FormBuilder from "../utils/FormBuilder";

export default function Login() {

  const fields = [
    { id: "username", type: "text", label: "Username" },
    { id: "password", type: "text", label: "Password" },
  ];

  let init = {};
  fields.forEach((field) => (init[field.id] = ""));

  const [values, setValues] = useState(init);
  const [disabled, setDisabled] = useState(true);


  const onSubmit = (e) => {
    e.preventDefault();
    // post login code here
  };

  const getFormState = (state) => {
    setValues(state.values);
    setDisabled(state.disabled);
 }

  return (
    <div className="form-container">
      <h2>Welcome Back</h2>
      <form onSubmit={onSubmit}>
        <FormBuilder
          fields={fields}
          init={init}
          validationSchema={loginFormSchema}
          getFormState={getFormState}
        />
      <button type="submit" disabled={disabled}>
        Login
      </button>
      </form>
      <Link className="forgotpw" to="/resetpassword">
        Forgot Password?
      </Link>
    </div>
  );
}
