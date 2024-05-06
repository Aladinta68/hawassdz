import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("كلمة المرور الجديدة مطلوبة")
    .min(6, "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل"),
  confirmedPassword: Yup.string()
    .required("يرجى تأكيد كلمة المرور")
    .oneOf([Yup.ref("password")],"يجب أن تتطابق كلمات المرور"),
});
