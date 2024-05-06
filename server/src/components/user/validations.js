import * as yup from "yup";

export const updateUserSchema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  phone: yup.string().matches(/^\d{10}$/, "Phone number must be 10 digits"),
  dateOfBirth: yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, "Date of birth must be in YYYY-MM-DD format"),
  gender: yup.string().oneOf(['Male', 'Female'], "Invalid gender"),
});
export const forgetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});
export const verifyCodePinSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  codePIN: yup.string().required("codePIN is required"),
});
export const updateForgetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  confirmedPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
export const updatePasswordSchema = yup.object().shape({
  oldPassword: yup.string().required("Password is required"),
  newPassword: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  confirmedNewPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("newPassword")], "Passwords must match"),
});
