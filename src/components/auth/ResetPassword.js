import React, {useState} from "react";
import passwordResetSchema from "./validation/passwordResetSchema";
import FormBuilder from "../utils/FormBuilder";

export default function ResetPassword() {
  const fields = [{ id: "email", type: "text", label:"Enter Email" }];

  let init = {};
  fields.forEach((field) => (init[field.id] = ""));

  const [values, setValues] = useState(init);
  const [disabled, setDisabled] = useState(true);

  const onSubmit = (e) => {
    e.preventDefault();
    // post reset password code here
  };

  const getFormState = (state) => {
    setValues(state.values);
    setDisabled(state.disabled);
 }

  return (
    <div className="form-container">
      <h2>Reset Password</h2>
      <form onSubmit={onSubmit}>
        <FormBuilder
          fields={fields}
          init={init}
          validationSchema={passwordResetSchema}
          getFormState={getFormState}
        />
      <button type="submit" disabled={disabled}>
        Send Recovery Email
      </button>
      </form>
    </div>
  );
}
