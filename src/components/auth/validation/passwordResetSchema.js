import * as Yup from "yup";

const passwordResetSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter email"),
});

export default passwordResetSchema;
