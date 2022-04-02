import React, { useState, useEffect } from 'react';
import {
  getAccessTokenFromLocal,
  deleteAccessTokenFromLocal,
} from '../LocalStorage/accessToken';
import {
  deleteUserFromLocal,
  getUserFromLocal,
} from '../LocalStorage/userStorage';
import { deleteMessagesFromLocal } from '../LocalStorage/messagesStorage';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  const logoutFunc = async () => {
    const res = await fetch('http://localhost:5000/user/logout', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getAccessTokenFromLocal()[0]}`,
      },
    });

    await deleteAccessTokenFromLocal();
    await deleteUserFromLocal();
    await deleteMessagesFromLocal();

    await router.reload();
  };

  const [username, setUsername] = useState('');

  useEffect(() => {
    const a = async () => {
      const data = getUserFromLocal()[0];
      if (data) {
        setUsername(data.username);
      }
    };
    a();
  }, []);

  return (
    <header className="w-full h-16 flex justify-between items-center px-16 shadow-xl">
      <p className="text-xl font-semibold">Hi {username}</p>
      <button
        className="bg-red-700 px-3 hover:scale-105 transition-all shadow-xl py-2 rounded-md flex justify-center items-center text-white"
        onClick={logoutFunc}
      >
        Logout
      </button>
    </header>
  );
}

export default Header;
