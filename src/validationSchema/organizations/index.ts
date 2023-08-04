import * as yup from 'yup';

export const organizationValidationSchema = yup.object().shape({
  summary: yup.string().nullable(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
