import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  login: Yup.string().email('Invalid login').required('Login is required'),
  password: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password is required')
    .matches(/[!@#\$%\^\&*\)\(+=._-]+/, 'Password must contains 1 capital and 1 special symbol')
    .matches(/[A-Z]+/, 'Password must contains 1 capital and 1 special symbol'),
});
