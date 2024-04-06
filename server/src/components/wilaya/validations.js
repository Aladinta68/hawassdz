import * as yup from 'yup';

export const addWilayaSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string(),
  location: yup.object().shape({
    longitude: yup.number().required('Longitude is required'),
    latitude: yup.number().required('Latitude is required'),
  }),
  typeGeographies: yup.array().of(
    yup.object().shape({
      title: yup.string().required('TypeGeographie title is required'),
    })
  ),
  mapLocationId: yup.string(),
});

export const updateWilayaSchema = yup.object().shape({
  name: yup.string(),
  description: yup.string(),
  location: yup.object().shape({
    longitude: yup.number(),
    latitude: yup.number(),
  }),
  typeGeographies: yup.array().of(
    yup.object().shape({
      title: yup.string().required('TypeGeographie title is required'),
    })
  ),
  mapLocationId: yup.string(),
});

export const imageUploadSchema = yup.object().shape({
  file: yup.mixed().required('Image file is required'),
});
