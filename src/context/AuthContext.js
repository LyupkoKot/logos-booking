import { createContext, Dispatch, ReactElement, SetStateAction, useContext, useEffect, useState } from 'react';
import { CognitoUser } from '@aws-amplify/auth';
import { Auth, Hub } from 'aws-amplify';
import { parseJwt } from '../utils/parseJwt';
const UserContext = createContext({});

export default function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    Hub.listen('auth', () => {
      // perform some action to update state whenever an auth event is detected.
      checkUser();
    });
  }, []);

  async function checkUser() {
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser();
      setIsAdmin(parseJwt(amplifyUser.signInUserSession.idToken.jwtToken)['cognito:groups']?.[0] == 'Admin');
      setUser(amplifyUser);
    } catch (error) {
      // No current signed in user.
      console.error(error);
      setIsAdmin(false)
      setUser(null);
    }
  }

  useEffect(() => {
    Hub.listen('auth', () => {
      // perform some action to update state whenever an auth event is detected.
      checkUser();
    });
  }, []);

  return <UserContext.Provider value={{ user, isAdmin, setUser, setIsAdmin }}>{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);
