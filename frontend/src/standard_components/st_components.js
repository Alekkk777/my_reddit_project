import React from 'react';
import Sidebar from '../standard_components/single_components/sidebar';
import SearchBar from '../standard_components/single_components/searchbar';
import UserProfile from '../standard_components/single_components/user';
import './st_components.css';

function StComponents() {
    return (
      <div className="main-container">
        <Sidebar />
        <div className='content-container'>
          <div className='header-container'>
            <UserProfile />
            <SearchBar />
          </div>
        </div>
      </div>
    );
}

export default StComponents;