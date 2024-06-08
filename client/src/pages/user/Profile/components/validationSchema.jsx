import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("الإسم الأول مطلوب"),
  lastName: Yup.string().required("إسم العائلة مطلوب"),
  phone: Yup.string().matches(/^[0-9]{10}$/, "رقم الهاتف غير صالح"),
  dateOfBirth: Yup.date().nullable(),
});
