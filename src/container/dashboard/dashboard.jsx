import React, { useState } from 'react';
import Details from '../../component/details/details';
import Sidebar from '../../component/sidebar/sidebar';
import TopBar  from '../../component/top-bar/index1';

import './style.css';

function Dashboard() {
    const [option, setOption] = useState();
    const optionHandler = (option) => {
      setOption(option);
    }
    return (
      <div>
          <TopBar />
          <div className='app-body'>
          <Sidebar onClickOption={optionHandler}/>
          <Details data={option} />
          </div>
      </div>
    )
}

export default Dashboard;