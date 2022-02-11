import { useState } from 'react';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { useUser } from '../../context/AuthContext';
import { FaChurch, FaCalendarAlt, FaPhone, FaSignOutAlt, FaSignInAlt, FaSun, FaMoon } from 'react-icons/fa';
import SideBarIcon from '../Icons/SideBarIcon';
import useDarkMode from '../../hooks/useDarkMode';

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <FaSun size="24" className="top-navigation-icon" />
      ) : (
        <FaMoon size="24" className="top-navigation-icon" />
      )}
    </span>
  );
};

const HeaderLayout = ({ children }) => {
  const router = useRouter();
  const { user } = useUser();

  const handleAuthorization = () => {
    router.push(`/login`);
  };

  const signUserOut = async () => {
    await Auth.signOut();
    router.push(`/`);
  };

  return (
    <div className="flex">
      <div
        className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
      >
        <SideBarIcon icon={<FaChurch size="28" />} text={'Home'} handleClick={() => router.push(`/`)} />
        <Divider />
        <SideBarIcon
          icon={<FaCalendarAlt size="32" />}
          text={'Calendar'}
          handleClick={() => router.push(`/calendar`)}
        />
        <SideBarIcon icon={<FaPhone size="20" />} text={'Contacts'} handleClick={() => router.push(`/contacts`)} />
        <Divider />
        {user ? (
          <SideBarIcon icon={<FaSignOutAlt size="22" />} text={'Sign Out'} handleClick={signUserOut} />
        ) : (
          <SideBarIcon icon={<FaSignInAlt size="22" />} text={'Sign In'} handleClick={handleAuthorization} />
        )}
        <span className='md:fixed md:top-4 md:right-4 mt-3 ml-1 md:m-0'>
          <ThemeIcon />
        </span>
      </div>
      <div className="content-container">{children}</div>
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default HeaderLayout;
