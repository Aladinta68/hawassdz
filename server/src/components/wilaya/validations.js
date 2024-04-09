import * as yup from "yup";

export const createWilayaSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  images: yup.array().of(yup.mixed()),
  mapLocation: yup.object().shape({
    longitude: yup.number(),
    latitude: yup.number(),
  }),
});

export const updateWilayaSchema = yup.object().shape({
  id: yup.string().required("Wilaya ID is required"),
  name: yup.string(),
  description: yup.string(),
  images: yup.array().of(yup.mixed()),
  mapLocation: yup.object().shape({
    longitude: yup.number(),
    latitude: yup.number(),
  }),
});
