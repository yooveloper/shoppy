import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { BsFillPencilFill } from 'react-icons/bs';
import { login, onUserStateChange } from '../api/firebase';
import { User } from 'firebase/auth';

export default function Navbar() {
  const [user, setUser] = useState<void | User>();

  const handleLogin = () => {
    login().then(setUser);
  };

  useEffect(() => {
    onUserStateChange((user: User) => {
      console.log(user);
      setUser(user);
    });
  }, []);

  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
      <Link to='/' className='flex items-center text-4xl text-brand'>
        <FiShoppingBag />
        <h1>Shoppy</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        <Link to='/carts'>carts</Link>
        <Link to='/products/new' className='text-2xl'>
          <BsFillPencilFill />
        </Link>
        <button onClick={handleLogin}>Login</button>
      </nav>
    </header>
  );
}
