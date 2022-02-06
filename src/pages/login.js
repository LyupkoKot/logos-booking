import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useForm } from 'react-hook-form';
import Input from '../components/Input/Input';
import { Alert } from '../components/Alert/Alert';
import { useUser } from '../context/AuthContext';
import { useRouter } from 'next/router';

const Signup = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [signInError, setSignInError] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await Auth.signIn(data.email, data.password);
      router.push(`/`);
    } catch (error) {
      console.error(error);
      setSignInError(error.message);
      setOpen(true);
    }
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  return (
    <div className="content-container">
      <div className="flex flex-col items-center">
        <Alert errorText={signInError} open={open} onClose={handleClose} />
        <div className="max-w-full sm:w-540 mt-14">
          <div
            className="
            py-14 px-16 
            bg-gray-400 dark:bg-gray-600
            rounded-md shadow-md transition duration-300 ease-in-out;"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col justify-center">
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  required={true}
                  error={errors.email ? true : false}
                  errorText={errors.email ? errors.email.message : ''}
                  register={register('email')}
                />
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  required={true}
                  error={errors.password ? true : false}
                  errorText={errors.password ? errors.password.message : ''}
                  register={register('password')}
                />
                <button className="primary-button w-full mt-10" type="submit">
                  {'Sign In'}
                </button>
                <p className="text-gray-500  dark:text-gray-400 mt-12 text-sm font-light">
                  Don't have an account?
                  <span
                    onClick={() => router.push(`/signup`)}
                    role="button"
                    className="cursor-pointer text-blue-500 hover:underline"
                  >
                    {' Sign Up.'}
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
