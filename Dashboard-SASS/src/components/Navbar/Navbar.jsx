import { MdDashboard } from 'react-icons/md';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoSettings } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <MdDashboard />
        <span>Admin Dashboard</span>
      </div>
      <div className='right'>
        <div className='icons'>
          <CiSearch />
          <BiMessageSquareDetail />
          <div className='notification'>
            <IoIosNotificationsOutline />
            <span>1</span>
          </div>
          <IoSettings />
        </div>
        <div className='profile'>
          <img
            className='avatar'
            src='https://tse3.mm.bing.net/th/id/OIP.EwG6x9w6RngqsKrPJYxULAHaHa?pid=Api&P=0&h=220'
            alt='User profile Avatar'
          />
          <span>Bao Nguyen</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
