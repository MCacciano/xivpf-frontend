import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Button from '../Button';
import Input from '../Input/Input';

const SignUpForm = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const signUpSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email().required('Required'),
    password: Yup.string().min(6).required('Required'),
    confirmPassword: Yup.string()
      .test('passwords-match', 'Passwords must match', function (val) {
        return this.parent.password === val;
      })
      .required('Required'),
  });

  return (
    <div className='flex flex-col space-y-5 border border-black bg-white rounded shadow z-20 p-5'>
      <h1 className='text-2xl text-blue-600'>Welcome to LFGPF</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={onSubmit}
      >
        <Form className='flex flex-col gap-y-4'>
          <Input label='Name' name='name' />
          <Input label='Email' name='email' type='email' />
          <Input label='Password' name='password' type='password' />
          <Input
            label='Confirm Password'
            name='confirmPassword'
            type='password'
          />
          <Button
            type='submit'
            intent='primary'
            className='h-full w-full font-semibold text-sm'
          >
            Sign Up
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpForm;
