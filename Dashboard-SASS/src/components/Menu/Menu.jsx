import { Link } from 'react-router-dom';

import { FaHome } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { FaUsers } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';
import { AiFillContainer } from 'react-icons/ai';
import { BsFilePost } from 'react-icons/bs';
import './Menu.scss';

const Menu = () => {
  return (
    <div className='menu'>
      <div className='item'>
        <span className='title'>main</span>
        <Link to='/home' className='ListTitle'>
          <FaHome />
          <span className='ListTitleItem'>Home</span>
        </Link>
        <Link to='/home' className='ListTitle'>
          <ImProfile />
          <span className='ListTitleItem'>Profile</span>
        </Link>
      </div>
      <div className='item'>
        <span className='title'>lists</span>
        <Link to='/vite.config.js' className='ListTitle'>
          <FaUsers />
          <span className='ListTitleItem'>Users</span>
        </Link>
        <Link to='/' className='ListTitle'>
          <IoCartOutline />
          <span className='ListTitleItem'>Products</span>
        </Link>
        <Link to='/' className='ListTitle'>
          <AiFillContainer />
          <span className='ListTitleItem'>Orders</span>
        </Link>
        <Link to='/' className='ListTitle'>
          <BsFilePost />
          <span className='ListTitleItem'>Posts</span>
        </Link>
      </div>
      <div className='item'>
        <span className='title'>general</span>
        <Link to='/home' className='ListTitle'>
          <FaHome />
          <span className='ListTitleItem'>Element</span>
        </Link>
        <Link to='/home' className='ListTitle'>
          <ImProfile />
          <span className='ListTitleItem'>Notes</span>
        </Link>
        <Link to='/home' className='ListTitle'>
          <ImProfile />
          <span className='ListTitleItem'>Forms</span>
        </Link>
        <Link to='/home' className='ListTitle'>
          <ImProfile />
          <span className='ListTitleItem'>Calendar</span>
        </Link>
      </div>
      <div className='item'>
        <span className='title'>maintaince</span>
        <Link to='/home' className='ListTitle'>
          <FaHome />
          <span className='ListTitleItem'>Setting</span>
        </Link>
        <Link to='/home' className='ListTitle'>
          <ImProfile />
          <span className='ListTitleItem'>Backsups</span>
        </Link>
      </div>
      <div className='item'>
        <span className='title'>analytics</span>
        <Link to='/home' className='ListTitle'>
          <FaHome />
          <span className='ListTitleItem'>Chart</span>
        </Link>
        <Link to='/home' className='ListTitle'>
          <ImProfile />
          <span className='ListTitleItem'>Logs</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
