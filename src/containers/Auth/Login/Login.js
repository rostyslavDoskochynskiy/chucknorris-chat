import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import { login } from '@app/store/actions/auth/auth';
import { Button, Input } from '@app/components';
import { StyledForm, FieldBox } from './style';

export const Login = () => {
  const dispatch = useDispatch();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
  } = useFormik({
    validationSchema,
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: (values) => dispatch(login(values)),
  });

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <FieldBox>
          {/* Login Field */}
          <Input
            label="Login"
            variant="outlined"
            name="login"
            error={!!errors.login && !!touched.login}
            helperText={errors.login && touched.login && errors.login}
            value={values.login}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          {/* Password Field */}
          <Input
            label="Password"
            variant="outlined"
            name="password"
            type="password"
            error={!!errors.password && !!touched.password}
            helperText={errors.password && touched.password && errors.password}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FieldBox>

        {/* Login Button */}
        <Button
          fullWidth
          style={{ marginTop: '10px' }}
          type="submit"
          color="primary"
          variant="contained"
          disabled={isSubmitting || !!errors.login || !!errors.password}
        >
          Login
        </Button>
      </div>
    </StyledForm>
  );
};
