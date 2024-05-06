import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("الإسم الأول مطلوب"),
  lastName: Yup.string().required("إسم العائلة مطلوب"),
  email: Yup.string()
    .email("بريد إلكتروني خاطئ")
    .required("البريد الالكتروني مطلوب"),
  password: Yup.string()
    .min(6, "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل")
    .required("كلمة المرور مطلوبة"),
});
