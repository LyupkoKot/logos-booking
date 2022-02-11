import { useState } from 'react';
import { Auth } from 'aws-amplify';
import { useForm } from 'react-hook-form';
import Input from '../components/Input/Input';
import { Alert } from '../components/Alert/Alert';
import { useUser } from '../context/AuthContext';
import { useRouter } from 'next/router';

const Signup = () => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const [showCode, setShowCode] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (showCode) {
        confirmSignUp(data);
      } else {
        await signUpWithEmailAndPassword(data);
        setShowCode(true);
      }
    } catch (err) {
      console.error(err);
      setSignUpError(err.message);
      setOpen(true);
    }
  };

  const handleClose = (e) => {
    setOpen(false);
  };

  async function signUpWithEmailAndPassword(data) {
    const { username, password, email } = data;
    try {
      const { user } = await Auth.signUp({
        username: email,
        email,
        password,
        attributes: {
          name: username,
        },
      });
    } catch (error) {
      throw error;
    }
  }

  async function confirmSignUp(data) {
    const { email, password, code } = data;
    try {
      await Auth.confirmSignUp(email, code);
      const amplifyUser = await Auth.signIn(email, password);
      if (amplifyUser) {
        router.push(`/`);
      } else {
        throw new Error("Something went wrong :'(");
      }
    } catch (error) {
      console.error('error confirming sign up', error);
    }
  }


  return (
      <div className="flex flex-col items-center">
        <Alert errorText={signUpError} open={open} onClose={handleClose} />
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
                  id="username"
                  label="Username"
                  error={errors.username ? true : false}
                  errorText={errors.username ? errors.username.message : ''}
                  required={true}
                  register={register('username', {
                    required: { value: true, message: 'Please enter a username' },
                    maxLength: { value: 20, message: 'Please enter a username between 3-20 characters' },
                    minLength: { value: 3, message: 'Please enter a username between 3-20 characters' },
                  })}
                />
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  required={true}
                  error={errors.email ? true : false}
                  errorText={errors.email ? errors.email.message : ''}
                  register={register('email', {
                    required: { value: true, message: 'Please enter a valid email' },
                  })}
                />
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  required={true}
                  error={errors.password ? true : false}
                  errorText={errors.password ? errors.password.message : ''}
                  register={register('password', {
                    required: { value: true, message: 'Please enter a password' },
                    minLength: { value: 8, message: 'Please enter a stronger password' },
                  })}
                />
                {showCode && (
                  <Input
                    id="code"
                    label="Code"
                    type="text"
                    required={true}
                    error={errors.code ? true : false}
                    errorText={errors.code ? errors.code.message : ''}
                    register={register('code', {
                      required: { value: true, message: 'Provide a confirmation code' },
                    })}
                  />
                )}
                <button className="primary-button w-full mt-10" type="submit">
                  {showCode ? 'Confirm Code' : 'Sign Up'}
                </button>
                <p className="text-gray-500  dark:text-gray-400 mt-12 text-sm font-light">
                  Already have an account?
                  <span
                    onClick={() => router.push(`/login`)}
                    role="button"
                    className="cursor-pointer text-blue-500 hover:underline"
                  >
                    {' Log In.'}
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Signup;
