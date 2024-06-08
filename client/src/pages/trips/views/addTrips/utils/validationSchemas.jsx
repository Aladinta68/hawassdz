import * as Yup from "yup";

export const validationSchemaStepOne = Yup.object({
  name: Yup.string().required("عنوان الرحلة مطلوب"),
  type: Yup.string().required("نوع الرحلة مطلوب"),
  destination: Yup.string().required("الوجهة مطلوبة"),
  price: Yup.mixed()
    .required("السعر مطلوب")
    .test("is-price-valid", "السعر يجب أن يكون رقمًا", (value) => {
      return typeof value === "number" || value === "Free";
    }),
});

export const validationSchemaStepTwo = Yup.object({
  numberPerson: Yup.number()
    .min(1, "يجب أن يكون عدد الأشخاص أكبر من 0"),
  dateDepart: Yup.date()
    .min(new Date(), " تاريخ الاقلاع خاطئ"),
  dateArrive: Yup.date()
    .min(Yup.ref("dateDepart"), "يجب أن يكون تاريخ العودة بعد تاريخ الاقلاع"),
  longitude: Yup.number()
    .min(0.01, " 0km يجب أن يكون الطول أكبر من "),
});

export const validationSchemaStepThree = Yup.object({
  description: Yup.string().required("الوصف مطلوب"),
});

export const validationSchemaStepFour = Yup.object({
  images: Yup.array()
    .min(1, "يرجى تحميل صورة واحدة على الأقل")
    .required("يرجى تحميل صورة واحدة على الأقل"),
});

export const validationSchemaStepFive = Yup.object({
  phone: Yup.number().required("رقم الهاتف مطلوب"),
});
