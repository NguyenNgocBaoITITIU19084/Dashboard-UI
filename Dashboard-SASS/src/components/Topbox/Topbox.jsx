import { topDealUsers } from '../../data';

import './TopBox.scss';

const Topbox = () => {
  return (
    <div className='topbox'>
      <h1>Top Deals</h1>
      <div className='list'>
        {topDealUsers.map((user) => (
          <div className='item' key={user.id}>
            <div className='user'>
              <img src={user?.img} alt='user avatar' />
              <div className='user-infor'>
                <span className='user-name'>{user?.username}</span>
                <span className='user-email'>{user?.email}</span>
              </div>
            </div>
            <div className='amount'>${user?.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbox;
