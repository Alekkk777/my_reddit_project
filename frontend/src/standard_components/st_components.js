import React from 'react';
import Sidebar from '../standard_components/single_components/sidebar';
import UserProfile from '../standard_components/single_components/user';
import './st_components.css';

function StComponents() {
    return (
      <div className="main-container">
        <Sidebar />
        <div className='content-container'>
          <div className='header-container'>
            <UserProfile />
          </div>
        </div>
      </div>
    );
}

export default StComponents;
