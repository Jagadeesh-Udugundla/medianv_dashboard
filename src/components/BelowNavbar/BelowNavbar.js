import Search from "./Searchbar.js"
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const BelowNavbar = () => {
  return (
    <div className='navbelow'>
      <div className='nabelow'>
        <p className='navbtn'>Live</p>
        <p className='navbtn'>Results</p>
        <p className='navbtn'>History</p>
        <Search/>
      </div>
      <div className='create'>
        Create
        <AddIcon />
      </div>
    </div>
  );
};

export default BelowNavbar;
