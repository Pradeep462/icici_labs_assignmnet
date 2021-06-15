import React from 'react';
import './Header.css';



const Header = ({ setPopupcard}) => {

    return (
        <div className="header">
            <h2 className="main-heading">Dog Gallery</h2>
            <button className="custom-btn" onClick={()=>setPopupcard(true)}>Custom Search</button>
              
        </div>
    );
};

export default Header;