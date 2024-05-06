import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("بريد إلكتروني خاطئ")
    .required("البريد الالكتروني مطلوب"),
  password: Yup.string().required("كلمة المرور مطلوبة"),
});
