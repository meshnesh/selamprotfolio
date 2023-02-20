/* eslint-disable react/no-unescaped-entities */
import {React} from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import * as yup from 'yup';

const SERVICE_ID = 'service_wkca0nb';
const TEMPLATE_ID = 'template_owhs9ij';
const USER_ID = 'F1TtRrjH-3FaOE6Hx';

const validationSchema = yup.object({
  firstName: yup
    .string('Enter your first name')
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your first name'),
  lastName: yup
    .string('Enter your last name')
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your last name'),
  email: yup
    .string('Enter your email')
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  message: yup
    .string()
    .trim()
    .max(500, 'The message cannot contain more than 500 characters'),
});

const Form = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, {resetForm}) => {
      try {
        emailjs.send(SERVICE_ID , TEMPLATE_ID, values, USER_ID)
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            }, (error) => {
              console.log(error.text);
              Swal.fire({
                icon: 'error',
                title: 'Ooops, something went wrong'
              });
            });
            resetForm({values: ''});
          });
      } catch {
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong'
        });
        resetForm({values: ''});
      }
    },
  });

  return (
    <Box>
      <Box
        padding={{ xs: 3, sm: 6 }}
        width={'100%'}
        component={Card}
        borderRadius={2}
        boxShadow={4}
        marginBottom={4}>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="First name"
                name='firstName'
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                sx={{ height: 54 }}
                label="Last name"
                name='lastName'
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                sx={{ height: 54 }}
                label="Email"
                type="email"
                name='email'
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Message"
                name='message'
                multiline
                rows={6}
                variant="outlined"
                color="primary"
                size="medium"
                fullWidth
                value={formik.values.message}
                onChange={formik.handleChange}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ height: 54 }}
                variant="contained"
                color="primary"
                size="medium"
                fullWidth
                type='submit'>
                Submit
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography component="p" variant="body2" align="left">
                  By clicking on "submit" you agree to our{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Privacy Policy
                  </Box>
                  ,{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Data Policy
                  </Box>{' '}
                  and{' '}
                  <Box
                    component="a"
                    href=""
                    color={theme.palette.text.primary}
                    fontWeight={'700'}
                  >
                    Cookie Policy
                  </Box>
                  .
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Box>
        <Typography color="text.secondary" align={'center'}>
          We'll get back to you in 1-2 business days.
        </Typography>
      </Box>
    </Box>
  );
};

export default Form;
