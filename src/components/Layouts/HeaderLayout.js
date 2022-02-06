import { useState } from 'react';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';
import { useUser } from '../../context/AuthContext';
import { FaChurch, FaCalendarAlt, FaPhone, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';
import SideBarIcon from '../Icons/SideBarIcon';

const HeaderLayout = () => {
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
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <SideBarIcon icon={<FaChurch size="28" />} text={'Home'} handleClick={() => router.push(`/`)} />
      <Divider />
      <SideBarIcon icon={<FaCalendarAlt size="32" />} text={'Calendar'} handleClick={() => router.push(`/calendar`)} />
      <SideBarIcon icon={<FaPhone size="20" />} text={'Contacts'} handleClick={() => router.push(`/`)} />
      <Divider />
      {user ? (
        <SideBarIcon icon={<FaSignOutAlt size="22" />} text={'Sign Out'} handleClick={signUserOut} />
      ) : (
        <SideBarIcon icon={<FaSignInAlt size="22" />} text={'Sign In'} handleClick={handleAuthorization} />
      )}
    </div>
  );
};

const Divider = () => <hr className="sidebar-hr" />;

export default HeaderLayout;
