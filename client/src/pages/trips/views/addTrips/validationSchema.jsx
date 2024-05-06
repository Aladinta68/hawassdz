import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("عنوان الرحلة مطلوب"),
  type: Yup.string().required("نوع الرحلة مطلوب"),
  destination: Yup.string().required("الوجهة مطلوبة"),
  numberPerson: Yup.string().required("عدد الأشخاص مطلوب"),
  dateDepart: Yup.string().required("تاريخ الاقلاع مطلوب"),
  dateArrive: Yup.string().required("تاريخ العودة مطلوب"),
  longitude: Yup.string().required("طول المسار مطلوب"),
  transportType: Yup.string().required("نوع النقل مطلوب"),
  gender: Yup.string().required("الجنس مطلوب").oneOf(["Femme", "Homme"], "الجنس يجب أن يكون 'Femme' أو 'Homme'"),
  ageRange: Yup.string().required("نطاق العمر مطلوب"),
  price: Yup.string().required("السعر مطلوب"),
  description: Yup.string().required("الوصف مطلوب"),
  phone: Yup.string().required("رقم الهاتف مطلوب"),
});
