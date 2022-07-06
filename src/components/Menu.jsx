import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon, LogoutIcon, UserIcon } from '@heroicons/react/solid';
import { clearCart } from '../redux/cartRedux';
import { logout } from '../redux/userRedux';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';

const MenuDropdown = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.user.currentUser);

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(logout(), clearCart());
    history.go(0);
  };
  return (
    <div className='text-right'>
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            <UserIcon
              className='ml-2 -mr-4 h-5 w-5 text-gray-400 hover:text-gray-500'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'>
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            {/* <div className='px-1 py-1 '>
              <Menu.Item>
                <span>{user.email}</span>
              </Menu.Item>
            </div> */}
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleClick}
                    className={`${
                      active ? 'bg-green-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    {active ? (
                      <LogoutIcon className='mr-2 h-5 w-5' aria-hidden='true' />
                    ) : (
                      <LogoutIcon className='mr-2 h-5 w-5' aria-hidden='true' />
                    )}
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default MenuDropdown;
